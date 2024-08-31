import pepe from "/src/app/pepe.css";


async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json()
  return data.data
}

const card = {
  borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
}

async function UserPage({params}) {
  const user = await getUser(params.id)

  return (

<section style={pepe.gradientCustom}>
  <div className="container py-5">

    <div className="row">

      <div className="col-md-6 col-lg-5 col-xl-5 mb-4 mb-md-0">

        <h5 className="font-weight-bold mb-3 text-center text-white">Member</h5>

        <div className="card mask-custom">
          <div className="card-body">

            <ul className="list-unstyled mb-0">
              <li className="p-2 border-bottom" style={card}>
                <a href="#!" className="d-flex justify-content-between link-light">
                  <div className="d-flex flex-row">
                  <img src="/user-icon.png" alt="avatar"
                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" height="60"></img>
                    <div className="pt-1">
                      <p className="fw-bold mb-0">John Doe</p>
                      <p className="small text-white">Hello, Are you there?</p>
                    </div>
                  </div>
                  <div className="pt-1">
                    <p className="small text-white mb-1">Just now</p>
                    <span className="badge bg-danger float-end">1</span>
                  </div>
                </a>
              </li>
              <li className="p-2 border-bottom" style={card}>
                <a href="#!" className="d-flex justify-content-between link-light">
                  <div className="d-flex flex-row">
                    <img src="/user-icon.png" alt="avatar"
                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" height="60"></img>

                    <div className="pt-1">
                      <p className="fw-bold mb-0">Danny Smith</p>
                      <p className="small text-white">Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                  <div className="pt-1">
                    <p className="small text-white mb-1">5 mins ago</p>
                  </div>
                </a>
              </li>
              <li className="p-2 border-bottom" style={card}>
                <a href="#!" className="d-flex justify-content-between link-light">
                  <div className="d-flex flex-row">
                  <img src="/user-icon.png" alt="avatar"
                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" height="60"></img>

                    <div className="pt-1">
                      <p className="fw-bold mb-0">Alex Steward</p>
                      <p className="small text-white">Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                  <div className="pt-1">
                    <p className="small text-white mb-1">Yesterday</p>
                  </div>
                </a>
              </li>
              <li className="p-2 border-bottom" style={card}>
                <a href="#!" className="d-flex justify-content-between link-light">
                  <div className="d-flex flex-row">
                  <img src="/user-icon.png" alt="avatar"
                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" height="60"></img>

                    <div className="pt-1">
                      <p className="fw-bold mb-0">Ashley Olsen</p>
                      <p className="small text-white">Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                  <div className="pt-1">
                    <p className="small text-white mb-1">Yesterday</p>
                  </div>
                </a>
              </li>
              <li className="p-2 border-bottom" style={card}>
                <a href="#!" className="d-flex justify-content-between link-light">
                  <div className="d-flex flex-row">
                  <img src="/user-icon.png" alt="avatar"
                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" height="60"></img>

                    <div className="pt-1">
                      <p className="fw-bold mb-0">Kate Moss</p>
                      <p className="small text-white">Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                  <div className="pt-1">
                    <p className="small text-white mb-1">Yesterday</p>
                  </div>
                </a>
              </li>
              <li className="p-2 border-bottom" style={card}>
                <a href="#!" className="d-flex justify-content-between link-light">
                  <div className="d-flex flex-row">
                  <img src="/user-icon.png" alt="avatar"
                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" height="60"></img>

                    <div className="pt-1">
                      <p className="fw-bold mb-0">Lara Croft</p>
                      <p className="small text-white">Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                  <div className="pt-1">
                    <p className="small text-white mb-1">Yesterday</p>
                  </div>
                </a>
              </li>
              <li className="p-2">
                <a href="#!" className="d-flex justify-content-between link-light">
                  <div className="d-flex flex-row">
                  <img src="/user-icon.png" alt="avatar"
                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" height="60"></img>

                    <div className="pt-1">
                      <p className="fw-bold mb-0">Brad Pitt</p>
                      <p className="small text-white">Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                  <div className="pt-1">
                    <p className="small text-white mb-1">5 mins ago</p>
                    <span className="text-white float-end"><i className="fas fa-check" aria-hidden="true"></i></span>
                  </div>
                </a>
              </li>
            </ul>

          </div>
        </div>

      </div>

      <div className="col-md-6 col-lg-7 col-xl-7">

        <ul className="list-unstyled text-white">
          <li className="d-flex justify-content-between mb-4">
          <img src="/user-icon.png" alt="avatar"
                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" height="60"></img>

            <div className="card mask-custom">
              <div className="card-header d-flex justify-content-between p-3"
                style={card}>
                <p className="fw-bold mb-0">Brad Pitt</p>
                <p className="text-light small mb-0"><i className="far fa-clock"></i> 12 mins ago</p>
              </div>
              <div className="card-body">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </li>
          <li className="d-flex justify-content-between mb-4">
            <div className="card mask-custom w-100">
              <div className="card-header d-flex justify-content-between p-3"
                style={card}>
                <p className="fw-bold mb-0">Lara Croft</p>
                <p className="text-light small mb-0"><i className="far fa-clock"></i> 13 mins ago</p>
              </div>
              <div className="card-body">
                <p className="mb-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                  laudantium.
                </p>
              </div>
            </div>
            <img src="/user-icon.png" alt="avatar"
                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" height="60"></img>

          </li>
          <li className="d-flex justify-content-between mb-4">
          <img src="/user-icon.png" alt="avatar"
                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" height="60"></img>

            <div className="card mask-custom">
              <div className="card-header d-flex justify-content-between p-3"
                style={card}>
                <p className="fw-bold mb-0">Brad Pitt</p>
                <p className="text-light small mb-0"><i className="far fa-clock"></i> 10 mins ago</p>
              </div>
              <div className="card-body">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </li>
          <li className="mb-3">
            <div data-mdb-input-init className="form-outline form-white">
              <textarea className="form-control" id="textAreaExample3" rows="4"></textarea>
              <label className="form-label" for="textAreaExample3">Message</label>
            </div>
          </li>
          <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-light btn-lg btn-rounded float-end">Send</button>
        </ul>

      </div>

    </div>

  </div>
</section>

  )
}

export default UserPage;