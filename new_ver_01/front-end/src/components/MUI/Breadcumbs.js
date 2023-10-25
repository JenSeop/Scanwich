import React from 'react';
import { Breadcrumbs, Link, Typography, Container } from '@mui/material';

const CustomBreadcrumbs = ({ items }) => {
  return (
    <Container>
      <Breadcrumbs aria-label="breadcrumb">
        {items.map((item, index) => (
          <Link key={index} color="inherit" href={item.link}>
            {item.label}
          </Link>
        ))}
      </Breadcrumbs>
    </Container>
  );
};

export default CustomBreadcrumbs;
