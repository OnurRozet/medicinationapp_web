
import Link from 'next/link';
import React from 'react'



const Navbar = () => {

    const navbarList = [
        {
          name: 'Ana Sayfa',
          path: '/home',
          icon: 'fas fa-home'
        },
        {
          name: 'Eğitim Videosu',
          path: '/videoCrud',
          icon: 'fas fa-book-open'
        },
        {
          name: 'Roller',
          path: '/rol',
          icon: 'fas fa-user-tag'
        },
        {
          name: 'S.S.S',
          path: '/sss',
          icon: 'fas fa-question'
        },
        {
          name: 'Anket',
          path: '/anket',
          icon: 'fas fa-poll'
        },
        {
          name: 'Sınav',
          path: '/sınav',
          icon: 'fas fa-diagnoses'
        },
        {
          name: 'Departmanlar',
          path: '/department',
          icon: 'fas fa-building'
        },
        {
          name: 'Kullanıcı Düzenleme',
          path: '/userEdit',
          icon: 'fas fa-users'
        },
        {
          name: 'Rapor Sayfası',
          path: '/report',
          icon: 'fas fa-print'
        },
        {
          name: 'Kullanıcı Grupları',
          path: '/usersGroups',
          icon: 'fas fa-users-cog'
        },
      ]

    
  return (
    <nav className='navbar navbar-light sticky-top'>
        <div className='container-fluid'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                {
                    navbarList.map((item,i)=>(
                        <li key={i}>
                            <Link className='nav-link active ms-2' href={item.path}>
                                {item.name}
                            </Link>
                        </li>
                    ))
                }

            </ul>
        </div>
  
    </nav>
  );
}

export default Navbar