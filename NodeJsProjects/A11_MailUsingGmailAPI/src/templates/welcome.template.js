const welcomeTemplate = ({ name }) => {
  return {
    subject: 'Welcome to BiteBot 🚀',
    html: `
      <div style="font-family: Arial, sans-serif;">
        <h2>Hello ${name} 👋</h2>
        <p>Welcome to <strong>BiteBot</strong>.</p>
        <p>We’re excited to have you on board.</p>
        <br />
        <p>— Team BiteBot</p>
      </div>
    `,
    text: `Hello ${name}, welcome to BiteBot!`,
  };
};

export default welcomeTemplate;