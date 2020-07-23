import React from 'react';

import { Form, Input, Button, Modal } from 'antd';

const initialState = { visible: false };
type State = Readonly<typeof initialState>;

type Props = {
   submitEssay: any
};

export class EssayForm extends React.Component<Props, State> {
   readonly state = initialState;
   showModal = () => {
      this.setState({
         visible: true,
      });
   }

   handleOk = (e: any) => {
      e.preventDefault();
      console.log(e);
      this.setState({
         visible: false,
      });
   }

   handleCancel = (e: any) => {
      console.log(e);
      this.setState({
         visible: false,
      });
   }

   render() {
      return (
         <div>
            <Button type='primary' onClick={this.showModal}>
               Open Modal
            </Button>
            <Modal
               title='Basic Modal'
               visible={this.state.visible}
               onOk={this.handleOk}
               onCancel={this.handleCancel}
            >
               <p>Some contents...</p>
               <Form style={{ textAlign: 'center', marginTop: '50px' }} {...layout} name='nest-messages' onFinish={this.props.submitEssay} validateMessages={validateMessages}>

                  <Form.Item style={{ maxWidth: '800px' }} name='text' label='Essay Text' rules={[{ required: true }]}>
                     <Input.TextArea />
                  </Form.Item>
                  <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
                     <Button type='primary' htmlType='submit'>
                        Submit
                     </Button>
                  </Form.Item>
               </Form>
            </Modal>
         </div>

         /* <div className='container'>
            <Link to={`/question/${1}`}>
               some shit
            </Link>
         </div> */
      );
   }
}

const layout = {
   labelCol: { span: 8 },
   wrapperCol: { span: 16 },
};

const validateMessages = {
   // eslint-disable-next-line
   required: '${label} は必須です!',
   types: {
      // eslint-disable-next-line
      email: '${label} is not validate email!',
      // eslint-disable-next-line
      number: '${label} is not a validate number!',
   },
   number: {
      // eslint-disable-next-line
      range: '${label} must be between ${min} and ${max}',
   },
};