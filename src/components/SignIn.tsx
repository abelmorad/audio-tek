import logo from '../../public/logo.svg'

function SignIn() {
  return (
    <main className='sign-in-container'>
        <header className='sign-in-header-wrapper'>
            <div className="sign-in-logo-wrapper">
                <img style={{height: '40px', width: '40px'}} src={logo} alt="audio tek logo"/>
                <h1>Audio Tek</h1>
            </div>
            <p>It's modular and designed to last</p>
        </header>
        <form className='sign-in-form-wrapper'>
        <h2>Sign In</h2>
            <input className='email-input' type="email" name="email" id="emailInput" placeholder='Email' />
            <input className='password-input' type="password" name="password" id="passwordInput" placeholder='Password' />
            <a href="#">Forgot Password?</a>
            <button className='sign-in-btn button-primary' type="submit">Sign In</button>
            <p>Don't have an account? <a href="#">Sign Up Here</a></p>
        </form>
    </main>
  )
}

export default SignIn
