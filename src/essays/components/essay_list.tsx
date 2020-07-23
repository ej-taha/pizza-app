import React from 'react';
import { Card, Col, Row } from 'antd';
import { Essay } from '../models/Essay';

type Props = { essays: Essay[] };

export const EssayList = ({ essays }: Props) => {
   return (
      <div className='site-card-wrapper'>
         <Row gutter={16}>
            {essays && essays.map(essay => {
               return (
                  <Col key={essay._id} span={8}>
                     <Card title='Card title' extra={<a href={`/essays/${essay._id}`}>More</a>} bordered={false}>
                        {essay.userId}
                     </Card>
                  </Col>
               );
            })}
         </Row>
      </div>
   );
};