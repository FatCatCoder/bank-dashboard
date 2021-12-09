import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCat } from '@fortawesome/free-solid-svg-icons/index'

export default function Footer() {
    return (
            <footer class="p-10 bottom-0 footer bg-base-300 text-base-content">
                <div>
                    <FontAwesomeIcon icon={faCat} className='text-4xl'/>
                    <p>FatCat Industries Banking Ltd.
                        <br />
                        Providing reliable services since 1997
                    </p>
                </div>
                <div>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Accounting</a>
                    <a class="link link-hover">Loans</a>
                    <a class="link link-hover">Marketing</a>
                    <a class="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
            </footer>
    )
}
