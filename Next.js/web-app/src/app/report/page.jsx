import React from 'react'
import styles from './page.module.css'

const report = () => {
  return (
    <div className={styles.container}>

      {/* PAGE TITLE */}
      <h1 className={styles.title}>📊 Flight History & Performance</h1>

      <div className={styles.mainLayout}>

        {/* LEFT PANEL (Filters / Summary) */}
        <div className={styles.leftPanel}>
          <h2>Filters</h2>

          <label>Date Range</label>
          <input type="date" />
          <input type="date" />

          <label>Status</label>
          <select>
            <option>All</option>
            <option>Completed</option>
            <option>Aborted</option>
          </select>

          <button className={styles.filterBtn}>Apply Filters</button>

          <div className={styles.summary}>
            <h3>Summary</h3>
            <p>Total Flights: 24</p>
            <p>Avg Duration: 18 min</p>
            <p>Success Rate: 92%</p>
          </div>
        </div>


        {/* CENTER PANEL (Flight Logs Table) */}
        <div className={styles.centerPanel}>
          <h2>📜 Flight Logs</h2>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Duration</th>
                <th>Status</th>
                <th>Battery Used</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>#001</td>
                <td>2026-04-10</td>
                <td>20 min</td>
                <td>✅ Completed</td>
                <td>30%</td>
              </tr>

              <tr>
                <td>#002</td>
                <td>2026-04-11</td>
                <td>15 min</td>
                <td>⚠ Aborted</td>
                <td>25%</td>
              </tr>
            </tbody>
          </table>
        </div>


        {/* RIGHT PANEL (Performance Graphs - Mock UI) */}
        <div className={styles.rightPanel}>
          <h2>📈 Performance</h2>

          <div className={styles.graphCard}>
            <h3>Battery Usage</h3>
            <div className={styles.graphPlaceholderBattery}>
            </div>
          </div>

          <div className={styles.graphCard}>
            <h3>Flight Duration Trend</h3>
            <div className={styles.graphPlaceholder}>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default report