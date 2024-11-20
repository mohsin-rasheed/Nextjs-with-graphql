import Link from 'next/link';
function CDate(){
    const cdate = new Date().getFullYear();
    return(cdate)
  }
export default function Footer() {
  return (

    <footer className="py-4 bg-light mt-auto">
    <div className="container-fluid px-4">
        <div className="d-flex align-items-center justify-content-between small">
            <div className="text-muted">Copyright &copy; Todo App <CDate /></div>
        </div>
    </div>
</footer>
        );
        }
        