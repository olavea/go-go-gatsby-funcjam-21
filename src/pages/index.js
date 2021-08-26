import { Link } from 'gatsby'
import React from 'react'

const RubysTimeShipPage = () => {
  return (
    <main>
      <header>
        <h1>Ruby's TimeShip by Lillian (6 🏴‍☠️👸 ) and Ola Vea</h1>
        <Link to="/timeship/">Go to TimeShip Wheelhouse</Link>
      </header>

      <p>
        A serverless Gatsby function TimeShip that runs on gold.
      </p>

      <ul>
        <li>
          <a href="/api/time-ship?city=oslo&year=2026&price=333">
            /api/time-ship?city=oslo&year=2026&price=333
          </a>
        </li>
      </ul>
    </main>
  )
}

export default RubysTimeShipPage