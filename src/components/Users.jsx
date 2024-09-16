"use client";
import { useRouter } from "next/navigation";
import pepe from "/src/app/usersD/pepe.css";
import Image from "next/image";
const i = {
  borderRadius: "50%",
   marginRight: "5%",
}

const Users = () => {
  return (
    <section style={{ backgroundColor: '#CDC4F9' }}>
      <div style={{ padding: '3rem' }}>

        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ flex: 1 }}>

            <div style={{ borderRadius: '15px', border: '1px solid #ddd', backgroundColor: '#fff' }}>
              <div style={{ padding: '1rem' }}>

                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', borderRadius: '0.25rem', border: '1px solid #ccc' }}>
                    <input
                      type="search"
                      style={{
                        flex: 1,
                        borderRadius: '0.25rem',
                        border: 'none',
                        padding: '0.5rem',
                        borderColor: 'transparent',
                        boxShadow: 'inset 0px 0px 0px 1px transparent',
                      }}
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="search-addon"
                      className="form-control"
                    />
                    <span
                      id="search-addon"
                      style={{ padding: '0.5rem', backgroundColor: '#f1f1f1', borderRadius: '0 0.25rem 0.25rem 0' }}
                    >
                      <i className="fas fa-search"></i>
                    </span>
                  </div>

                  <div style={{ position: 'relative', height: '400px', overflowY: 'auto' }}>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                      <li style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>
                        <a href="#!" style={{ display: 'flex', justifyContent: 'space-between', textDecoration: 'none', color: 'inherit' }}>
                          <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div>
                              <Image src="/user-icon.png" alt="avatar" width={60} height={60} />
                              <span className="badge-dot" style={{ backgroundColor: '#28a745' }}></span>
                            </div>
                            <div style={{ paddingTop: '0.25rem', marginLeft: '0.75rem' }}>
                              <p style={{ fontWeight: 'bold', margin: 0 }}>Marie Horwitz</p>
                              <p style={{ fontSize: '0.875rem', color: '#6c757d', margin: 0 }}>Hello, Are you there?</p>
                            </div>
                          </div>
                          <div style={{ paddingTop: '0.25rem', textAlign: 'right' }}>
                            <p style={{ fontSize: '0.875rem', color: '#6c757d', margin: 0 }}>Just now</p>
                            <span style={{ display: 'inline-block', padding: '0.25rem 0.5rem', borderRadius: '1rem', backgroundColor: '#dc3545', color: '#fff' }}>3</span>
                          </div>
                        </a>
                      </li>
                      <li style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>
                        <a href="#!" style={{ display: 'flex', justifyContent: 'space-between', textDecoration: 'none', color: 'inherit' }}>
                          <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div>
                              <Image src="/user-icon.png" alt="avatar" width={60} height={60} />
                              <span className="badge-dot" style={{ backgroundColor: '#ffc107' }}></span>
                            </div>
                            <div style={{ paddingTop: '0.25rem', marginLeft: '0.75rem' }}>
                              <p style={{ fontWeight: 'bold', margin: 0 }}>Alexa Chung</p>
                              <p style={{ fontSize: '0.875rem', color: '#6c757d', margin: 0 }}>Lorem ipsum dolor sit.</p>
                            </div>
                          </div>
                          <div style={{ paddingTop: '0.25rem', textAlign: 'right' }}>
                            <p style={{ fontSize: '0.875rem', color: '#6c757d', margin: 0 }}>5 mins ago</p>
                            <span style={{ display: 'inline-block', padding: '0.25rem 0.5rem', borderRadius: '1rem', backgroundColor: '#dc3545', color: '#fff' }}>2</span>
                          </div>
                        </a>
                      </li>
                      <li style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>
                        <a href="#!" style={{ display: 'flex', justifyContent: 'space-between', textDecoration: 'none', color: 'inherit' }}>
                          <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div>
                              <Image src="/user-icon.png" alt="avatar" width={60} height={60} />
                              <span className="badge-dot" style={{ backgroundColor: '#28a745' }}></span>
                            </div>
                            <div style={{ paddingTop: '0.25rem', marginLeft: '0.75rem' }}>
                              <p style={{ fontWeight: 'bold', margin: 0 }}>Danny McChain</p>
                              <p style={{ fontSize: '0.875rem', color: '#6c757d', margin: 0 }}>Lorem ipsum dolor sit.</p>
                            </div>
                          </div>
                          <div style={{ paddingTop: '0.25rem', textAlign: 'right' }}>
                            <p style={{ fontSize: '0.875rem', color: '#6c757d', margin: 0 }}>Yesterday</p>
                          </div>
                        </a>
                      </li>
                      <li style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>
                        <a href="#!" style={{ display: 'flex', justifyContent: 'space-between', textDecoration: 'none', color: 'inherit' }}>
                          <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div>
                              <Image src="/user-icon.png" alt="avatar" width={60} height={60} />
                              <span className="badge-dot" style={{ backgroundColor: '#dc3545' }}></span>
                            </div>
                            <div style={{ paddingTop: '0.25rem', marginLeft: '0.75rem' }}>
                              <p style={{ fontWeight: 'bold', margin: 0 }}>Ashley Olsen</p>
                              <p style={{ fontSize: '0.875rem', color: '#6c757d', margin: 0 }}>Lorem ipsum dolor sit.</p>
                            </div>
                          </div>
                          <div style={{ paddingTop: '0.25rem', textAlign: 'right' }}>
                            <p style={{ fontSize: '0.875rem', color: '#6c757d', margin: 0 }}>Yesterday</p>
                          </div>
                        </a>
                      </li>
                      <li style={{ padding: '0.5rem' }}>
                        <a href="#!" style={{ display: 'flex', justifyContent: 'space-between', textDecoration: 'none', color: 'inherit' }}>
                          <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div>
                              <Image src="/user-icon.png" alt="avatar" width={60} height={60} />
                              <span className="badge-dot" style={{ backgroundColor: '#ffc107' }}></span>
                            </div>
                            <div style={{ paddingTop: '0.25rem', marginLeft: '0.75rem' }}>
                              <p style={{ fontWeight: 'bold', margin: 0 }}>Kate Moss</p>
                              <p style={{ fontSize: '0.875rem', color: '#6c757d', margin: 0 }}>Lorem ipsum dolor sit.</p>
                            </div>
                          </div>
                          <div style={{ paddingTop: '0.25rem', textAlign: 'right' }}>
                            <p style={{ fontSize: '0.875rem', color: '#6c757d', margin: 0 }}>Yesterday</p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>

                </div>

              </div>

            </div>

          </div>

          <div style={{ flex: 2, paddingLeft: '1rem' }}>

            <div style={{ paddingTop: '1rem', paddingRight: '1rem', position: 'relative', height: '400px', overflowY: 'auto' }}>

              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Image src="/user-icon.png" alt="avatar 1" width={50} height={50} />
                <div style={{ marginLeft: '0.75rem' }}>
                  <p style={{ fontSize: '0.875rem', padding: '0.5rem', borderRadius: '0.25rem', backgroundColor: '#e9ecef' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <p style={{ fontSize: '0.875rem', margin: '0.25rem 0', textAlign: 'right', color: '#6c757d' }}>12:00 PM | Aug 13</p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <div style={{ marginLeft: '0.75rem' }}>
                  <p style={{ fontSize: '0.875rem', padding: '0.5rem', borderRadius: '0.25rem', backgroundColor: '#007bff', color: '#fff' }}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <p style={{ fontSize: '0.875rem', margin: '0.25rem 0', color: '#6c757d' }}>12:00 PM | Aug 13</p>
                </div>
                <Image src="/user-icon.png" alt="avatar 1" width={50} height={50} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Image src="/user-icon.png" alt="avatar 1" width={50} height={50} />
                <div style={{ marginLeft: '0.75rem' }}>
                  <p style={{ fontSize: '0.875rem', padding: '0.5rem', borderRadius: '0.25rem', backgroundColor: '#e9ecef' }}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                  <p style={{ fontSize: '0.875rem', margin: '0.25rem 0', textAlign: 'right', color: '#6c757d' }}>12:00 PM | Aug 13</p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <div style={{ marginLeft: '0.75rem' }}>
                  <p style={{ fontSize: '0.875rem', padding: '0.5rem', borderRadius: '0.25rem', backgroundColor: '#007bff', color: '#fff' }}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <p style={{ fontSize: '0.875rem', margin: '0.25rem 0', color: '#6c757d' }}>12:00 PM | Aug 13</p>
                </div>
                <Image src="/user-icon.png" alt="avatar 1" width={50} height={50} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Image src="/user-icon.png" alt="avatar 1" width={50} height={50} />
                <div style={{ marginLeft: '0.75rem' }}>
                  <p style={{ fontSize: '0.875rem', padding: '0.5rem', borderRadius: '0.25rem', backgroundColor: '#e9ecef' }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                  <p style={{ fontSize: '0.875rem', margin: '0.25rem 0', textAlign: 'right', color: '#6c757d' }}>12:00 PM | Aug 13</p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <div style={{ marginLeft: '0.75rem' }}>
                  <p style={{ fontSize: '0.875rem', padding: '0.5rem', borderRadius: '0.25rem', backgroundColor: '#007bff', color: '#fff' }}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                  <p style={{ fontSize: '0.875rem', margin: '0.25rem 0', color: '#6c757d' }}>12:00 PM | Aug 13</p>
                </div>
                <Image src="/user-icon.png" alt="avatar 1" width={50} height={50} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Image src="/user-icon.png" alt="avatar 1" width={50} height={50} />
                <div style={{ marginLeft: '0.75rem' }}>
                  <p style={{ fontSize: '0.875rem', padding: '0.5rem', borderRadius: '0.25rem', backgroundColor: '#e9ecef' }}>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                  <p style={{ fontSize: '0.875rem', margin: '0.25rem 0', textAlign: 'right', color: '#6c757d' }}>12:00 PM | Aug 13</p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <div style={{ marginLeft: '0.75rem' }}>
                  <p style={{ fontSize: '0.875rem', padding: '0.5rem', borderRadius: '0.25rem', backgroundColor: '#007bff', color: '#fff' }}>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
                  <p style={{ fontSize: '0.875rem', margin: '0.25rem 0', color: '#6c757d' }}>12:00 PM | Aug 13</p>
                </div>
                <Image src="/user-icon.png" alt="avatar 1" width={50} height={50} />
              </div>

            </div>

            <div style={{ display: 'flex', alignItems: 'center', padding: '1rem', borderTop: '1px solid #ddd' }}>
              <Image src="/user-icon.png" alt="avatar 3" width={40} height={40} />
              <input
                type="text"
                placeholder="Type message"
                style={{
                  flex: 1,
                  marginLeft: '0.75rem',
                  borderRadius: '0.25rem',
                  border: '1px solid #ccc',
                  padding: '0.5rem',
                  borderColor: 'transparent',
                  boxShadow: 'inset 0px 0px 0px 1px transparent',
                }}
                className="form-control"
              />
              <a href="#!" style={{ marginLeft: '0.5rem', color: '#6c757d' }}><i className="fas fa-paperclip"></i></a>
              <a href="#!" style={{ marginLeft: '0.5rem', color: '#6c757d' }}><i className="fas fa-smile"></i></a>
              <a href="#!" style={{ marginLeft: '0.5rem' }}><i className="fas fa-paper-plane"></i></a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Users;
