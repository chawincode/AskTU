import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-custom-color-1 vh-100">
        <div className="container">
          <h1 className="text-custom-color-3">Sign in</h1>
          <form className="form-floating">
            {/* <div className="form-text">Sign in and start learn effectively</div> */}
            <h5 className="text-light">Sign in and start learn effectively</h5>
            <div className="mb-3">
              <input
                type="email"
                className="form-control bg-light"
                id="floatingInput"
                placeholder="Username"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control bg-light"
                id="floatingPassword"
                placeholder="Password"
                required
              />
            </div>

            <div className="mb-3">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-labe text-light">Remember me</label>
              <a href="/home" className="text-secondary text-decoration-none">
                Forgot password?
              </a>
            </div>

            <button className="btn btn-dark">Login</button>
            <button className="btn btn-light">Registor</button>
          </form>
        </div>
      </main>
    </>
  );
}
