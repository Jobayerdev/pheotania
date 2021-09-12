import { Button, PageHeader } from 'antd';

import { Authorization } from '@modules/auth';
import { Paths } from '@shared/enums';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  return (
    <Authorization allowedAccess={['FORBIDDEN']}>
      <PageHeader
        onBack={() => navigate(-1)}
        title="Service List"
        extra={[
          <Button
            key="one"
            onClick={() => navigate(Paths.ServicesCreate)}
            type="primary"
          >
            Create
          </Button>,
        ]}
      />
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id accusamus
      eligendi a assumenda voluptate modi fugit sunt commodi aliquid quibusdam.
      Non nostrum accusamus culpa explicabo error blanditiis totam voluptatum
      assumenda!
    </Authorization>
  );
};

export default Services;
