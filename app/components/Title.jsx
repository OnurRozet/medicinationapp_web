"use client"
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { NavDropdown } from 'react-bootstrap';
import pharmacy from '../Images/pharmacy.png'
import CookieUtil from '../utils/cookieUtils';


const Title = () => {

const user=CookieUtil.getUser()

console.log(user);

  return (
    <div className='flex flex-row items-center justify-center'>
      <div className="col-md-2">
        <Link className="navbar-brand pt-2" href="/home">
            <Image src={pharmacy} alt='pharmacy' width={100} height={100} />
        </Link>
      </div>
      <div className="col-md-8 mt-2">
        <input
          type="text"
          name="searchVal"
          //value={val}
          //onChange={handleChange}
          className="form-control form-control-lg w-100 border border-danger-subtle"
          placeholder="Aramak istediğiniz ilacın ismini girin..."
        />
        {/* {showRes && videos.length > 0 && (
          <div className="search-values">
            <ul>{videosList}</ul>
          </div>
        )} */}
      </div>
      <div className="col-md-2 text-end mt-1">
        <button
          className="btn btn-outline-danger rounded-circle"
          type="submit"
          style={{ width: "60px", height: "60px" }}
        >
          <NavDropdown
            title={`${user?.name.charAt(0).toUpperCase()}${user?.surname
              .charAt(0)
              .toUpperCase()}`}
          >
            <NavDropdown.Item as={Link} to={"/userDetails"}>
              Profil
            </NavDropdown.Item>
            <NavDropdown.Item as={Link}>
              Çıkış Yap
            </NavDropdown.Item>
          </NavDropdown>
        </button>
      </div>
    </div>
  );
}

export default Title
