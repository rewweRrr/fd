'use client';
import { forwardRef, memo, useCallback } from 'react';
import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { IMaskInput } from 'react-imask';

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const PhoneNumberMask = forwardRef<HTMLInputElement, CustomProps>(function PhoneNumberMask(props, ref) {
  const { onChange, ...other } = props;

  return (
    <IMaskInput
      {...other}
      mask='+{7} (000) 000-00-00'
      unmask={true}
      inputRef={ref}
      onAccept={value => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

export const FeedbackForm = memo(() => {
  const { control, handleSubmit } = useForm<{
    name: string;
    phoneNumber: string;
    company: string;
    comment: string;
  }>({
    defaultValues: { name: '', phoneNumber: '', company: '', comment: '' }
  });

  const onSubmit = useCallback((values: { name: string; phoneNumber: string; company: string; comment: string }) => {
    console.log('onSubmit', values);
  }, []);

  return (
    <Container maxWidth='xl'>
      <Stack rowGap={4} alignItems='center' maxWidth={620} margin='0 auto' mt={10}>
        <Stack rowGap={4}>
          <Typography fontSize={{ xs: 26, md: 40 }} fontWeight={700} textAlign='center' textTransform='uppercase'>
            Закажите демо
          </Typography>
          <Typography textAlign='center'>
            Расскажите про свой запрос и оставьте контакты — мы свяжемся с вами!
          </Typography>
        </Stack>
        <Box
          component='form'
          id='feedback-form'
          display='flex'
          flexDirection='column'
          rowGap={3}
          alignItems='center'
          width='100%'
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <Controller
            name='name'
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Поле обязательное для заполнения'
              }
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                variant='standard'
                label='Имя и фамилия'
                type='name'
                error={!!error}
                helperText={error?.message}
                required
              />
            )}
          />
          <Controller
            name='phoneNumber'
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Поле обязательное для заполнения'
              },
              minLength: {
                value: 11,
                message: 'Поле обязательное для заполнения'
              }
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                variant='standard'
                name='phoneNumber'
                placeholder='+7 (___) ___-__-__'
                label='Телефон'
                error={!!error}
                helperText={error?.message}
                type='tel'
                required
                slotProps={{
                  input: {
                    inputComponent: PhoneNumberMask as never
                  }
                }}
              />
            )}
          />
          <Controller
            name='company'
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Поле обязательное для заполнения'
              }
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                variant='standard'
                label='Название Компании'
                error={!!error}
                helperText={error?.message}
                required
              />
            )}
          />
          <Controller
            name='comment'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                variant='standard'
                label='Запрос или комментарий'
                error={!!error}
                helperText={error?.message}
                multiline
                rows={4}
              />
            )}
          />
          <Button variant='contained' size='large' type='submit' sx={{ width: 'fit-content' }}>
            Заказать Демо
          </Button>
        </Box>
        <Typography textAlign='center'>
          Нажимая «Заказать демо», вы соглашаетесь на обработку персональных данных
        </Typography>
      </Stack>
    </Container>
  );
});

FeedbackForm.displayName = 'FeedbackForm';
