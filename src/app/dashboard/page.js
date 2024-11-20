
export default function DashboardPage() {
 
  return (
    <main>
      <div className="container-fluid px-4">
          <h1 className="mt-4">Dashboard</h1>
          <ol className="breadcrumb mb-4">
              <li className="breadcrumb-item active">Dashboard</li>
          </ol>
          <div className="row">
              <div className="col-xl-3 col-md-6">
                  <div className="card bg-primary text-white mb-4">
                      <div className="card-body">Todos</div>
                      <div className="card-footer d-flex align-items-center justify-content-between">
                          <a className="small text-white stretched-link" href="/todos">View Todos</a>
                          <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                      </div>
                  </div>
              </div>
              
          </div>
          
          
      </div>
  </main>
  );
}
