import { Injectable } from '@nestjs/common';
import { createTransport, Transporter } from 'nodemailer';

@Injectable()
export class EmailService {
  private readonly transporter: Transporter;

  constructor() {
    this.transporter = createTransport({
      host: 'smtp.qq.com',
      port: 587,
      secure: false,
      auth: {
        user: '295444206@qq.com',
        pass: 'ifoqgabvdvzocaef',
      },
    });
  }

  async sendMail({ to, subject, html }: { to: string; subject: string; html: string }): Promise<void> {
    await this.transporter.sendMail({
      from: {
        name: '考试系统',
        address: '295444206@qq.com',
      },
      to,
      subject,
      html,
    });
  }
}
