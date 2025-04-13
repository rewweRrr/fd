'use client';
import { forwardRef, memo, useCallback, useState } from 'react';
import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { IMaskInput } from 'react-imask';
import { FeedbackFormDto } from '@/dto/feedback-form.dto';

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
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { control, handleSubmit } = useForm<FeedbackFormDto>({
    defaultValues: { name: '', phoneNumber: '', company: '', comment: '' }
  });

  const onSubmit = useCallback(async (values: FeedbackFormDto) => {
    try {
      setLoading(true);
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (res.status === 200) {
        setSuccess(true);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <Container maxWidth='xl'>
      <Stack rowGap={4} alignItems='center' maxWidth={620} margin='0 auto'>
        <Stack rowGap={4}>
          <Typography variant='h2' textAlign='center'>
            Закажите демо
          </Typography>
          <Typography textAlign='center'>
            Расскажите про свой запрос и оставьте контакты — мы свяжемся с вами!
          </Typography>
        </Stack>
        {success ? (
          <Box p={4} bgcolor={theme => theme.palette.success.light}>
            <Typography textAlign='center'>Спасибо! Свяжемся с вами в течение нескольких дней</Typography>
          </Box>
        ) : (
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
            <Button variant='contained' size='large' type='submit' sx={{ width: 'fit-content' }} loading={loading}>
              Заказать Демо
            </Button>
          </Box>
        )}

        <Typography textAlign='center'>
          Нажимая «Заказать демо», вы соглашаетесь на обработку персональных данных
        </Typography>
      </Stack>
    </Container>
  );
});

FeedbackForm.displayName = 'FeedbackForm';
