import logo from '../../public/logo.svg'

function SignIn() {
  return (
    <main className='sign-in-container'>
        <header className='sign-in-header-wrapper'>
            <div className="sign-in-logo-wrapper">
                <img src={logo} alt="audio tek logo"/>
                <h1>Audio Tek</h1>
            </div>
            <p>It's modular and designed to last</p>
        </header>
        <form className='sign-in-form-wrapper'>
            <input type="email" name="email" id="emailInput" />
            <input type="password" name="password" id="passwordInput" />
            <a href="#">Forgot Password?</a>
            <button type="submit">Sign In</button>
            <p>Don't have an account? <a href="#">Sign Up Here</a></p>
        </form>
    </main>
  )
}

export default SignIn