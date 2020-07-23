export interface EssayIteration {
   _id?: string;
   essayId: string;
   content: string;
   submissionDate: Date;
   iteration: number;
   isCorrection: boolean;
   correction: EssayIteration;
}