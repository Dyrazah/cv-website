import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>

      <h5>What I Do</h5>
      <h2>Work Experience</h2>

      <div className="container services__container">

        <article className="service">
          <div className="service__head">
            <h3>Liaison Officer Internship Ditmawa Telkom University</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Sebagai pemandu Bapak/Ibu dari fakultas atau unit terkait dalam 
                proses input data SIMKATMAWA atau Sistem Informasi Manajemen 
                Pemeringkatan Kemahasiswaan. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Mengawasi dan memastikan data-data terkait sudah lengkap. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Mengingatkan Bapak/Ibu dari fakultas atau unit terkait dalam 
                proses input data SIMKATMAWA atau Sistem Informasi Manajemen 
                Pemeringkatan Kemahasiswaan. </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Sekretaris Divisi Acara Permib Freedom in Creativity</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Mengkoordinasikan waktu dan keseluruhan acara kepada seluruh anggota. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Menganalisi dan membuat perencanaan acara yang akan diselenggarakan. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Menentukan tema, topik, dan pengisi acara. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Memastikan dan memantau acara berjalan dengan lancar dan sesuai dengan jadwal. </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Divisi Media dan Public Relation Warming Up</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Merancang konten sosial media warming up. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Membuat desain untuk konten sosial media warming up. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Mengkoordinasikan dan mengawasi sosial media warming up. </p>
            </li>
          </ul>
        </article>

      </div>

    </section>
  )
}

export default Services