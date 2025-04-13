import { FeedbackFormDto } from '@/dto/feedback-form.dto';

export async function POST(request: Request) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const data: FeedbackFormDto = await request.json();

  if (!data.name || !data.phoneNumber || !data.company)
    return Response.json({ error: 'Input is invalid' }, { status: 400 });

  try {
    const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          chat_id: chatId,
          text: data
        },
        null,
        2
      )
    });
    if (res.status === 200) {
      return Response.json({ message: 'Ok!' });
    }
  } catch {
    return Response.json({ error: 'Something went wrong' }, { status: 500 });
  }

  return Response.json({ error: 'Something went wrong' }, { status: 500 });
}
