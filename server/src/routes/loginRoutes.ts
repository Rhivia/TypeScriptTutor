import { Router, Request, Response } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

const router = Router();

router.get('/', (req: Request, res: Response) => {
  // Verify Session
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <div>You are logged in.</div>
        <a href="/logout">Logout!</a>
      </div>
    `)
  } else {
    res.send(`
      <div>
        <h1>Howd partner!</h1>
        <span>Go to <a href="/login">/login</a> to login!</span>
      </div>
    `)
  }
});

router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
      <button>Submit</button>
    </form>
  `);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === 'hi@hi.com' && password === 'password') {
    // Mark the user as logged in
    req.session = { loggedIn: true };
    // Redirect to root route
    res.redirect('/');
  } else {
    res.send('Invalid email or password');
  }

  // if (email) {
  //   res.send(email.toUpperCase());
  // } else {
  //   res.send(422);
  // }
});

router.post('/logout', (req: RequestWithBody, res: Response) => {
  req.session = { loggedIn: false };
  res.redirect('/');
});

export { router };
