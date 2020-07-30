import auth0 from 'auth0-js';

class Auth {
   auth0: auth0.WebAuth;
   idToken: string;
   profile: any;
   expiresAt: any;

   constructor() {
      this.auth0 = new auth0.WebAuth({
         // the following three lines MUST be updated
         domain: 'dev-ua5quy8g.eu.auth0.com',
         audience: 'https://dev-ua5quy8g.eu.auth0.com/userinfo',
         clientID: '04Ij3OHRbFSuxSvHfVsj9WR3fAOtwwTO',
         redirectUri: 'http://localhost:3000/callback',
         responseType: 'id_token',
         scope: 'openid email profile'
      });

      this.getProfile = this.getProfile.bind(this);
      this.handleAuthentication = this.handleAuthentication.bind(this);
      this.isAuthenticated = this.isAuthenticated.bind(this);
      this.signIn = this.signIn.bind(this);
      this.signOut = this.signOut.bind(this);
   }

   getProfile() {
      return this.profile;
   }

   getIdToken() {
      return this.idToken;
   }

   isAuthenticated() {
      return new Date().getTime() < this.expiresAt;
   }

   signIn() {
      this.auth0.authorize();
   }

   handleAuthentication() {
      return new Promise((resolve, reject) => {
         this.auth0.parseHash((err, authResult) => {
            if (err) return reject(err);
            if (!authResult || !authResult.idToken) {
               return reject(err);
            }
            this.setSession(authResult);
            resolve();
         });
      });
   }

   setSession(authResult: auth0.Auth0DecodedHash) {
      this.idToken = authResult.idToken;
      this.profile = authResult.idTokenPayload;
      // set the time that the id token will expire at
      this.expiresAt = authResult.idTokenPayload.exp * 1000;
   }

   signOut() {
      this.auth0.logout({
         returnTo: 'http://localhost:3000',
         clientID: '04Ij3OHRbFSuxSvHfVsj9WR3fAOtwwTO',
      });
   }

   silentAuth() {
      return new Promise((resolve, reject) => {
         this.auth0.checkSession({}, (err, authResult) => {
            if (err) return reject(err);
            this.setSession(authResult);
            resolve();
         });
      });
   }
}

export const auth0Client = new Auth();