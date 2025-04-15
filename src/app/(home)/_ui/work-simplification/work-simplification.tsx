import { memo } from 'react';
import { Button, Container, Tab, Tabs, Typography } from '@mui/material';

export const WorkSimplification = memo(() => {
  return (
    <Container maxWidth='lg'>
      <Typography variant='h2' textAlign='center' mb={4}>
        ЭТАПЫ ПОДКЛЮЧЕНИЯ
      </Typography>
      <Tabs indicatorColor='primary' textColor='primary'>
        <Tab component={Button} label='1' variant='contained' size='large' />
        <Tab component={Button} label='2' />
      </Tabs>
    </Container>
  );
});

WorkSimplification.displayName = 'WorkSimplification';
