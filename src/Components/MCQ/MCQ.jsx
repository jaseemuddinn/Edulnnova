import React from 'react'
import { useState } from 'react';
import "./MCQ.css"


const MCQ = () => {
  return(
<>
  <div className="app">
      <div className="sidebar">
        <button className="regenerate-btn">Re-Generate</button>
        <div className="settings">
          <div className="setting-group">
            <label>Number of questions</label>
            <input type="number" value="10" readOnly />
          </div>
          <div className="setting-group">
            <label>Difficulty Level</label>
            <div className="difficulty-options">
              <label>
                <input type="radio" name="difficulty" value="easy" />
                Easy
              </label>
              <label>
                <input type="radio" name="difficulty" value="medium" />
                Medium
              </label>
              <label>
                <input type="radio" name="difficulty" value="hard" />
                Hard
              </label>
            </div>
          </div>
          <div className="setting-group">
            <label>Questions Types</label>
            <select>
              <option value="mixed">Mixed</option>
              <option value="mcq">Multiple Choice Questions</option>
              <option value="msq">Multiple Select Questions</option>
              <option value="case-based">Case Based Questions</option>
              <option value="assertion-reasoning">Assertion and Reasoning</option>
              <option value="subjective">Subjective Questions</option>
            </select>
          </div>
        </div>
      </div>
      <div className="qa-pane">
        <h2>QA Pane</h2>
        <div className="questions">
          <p>All five questions types type name with design and one dummy example</p>
          <div className="question-type">
            <h3>mcq</h3>
            <div className="question">
              <p>Q1:----------------------------</p>
              <p>q1, q2, q3, q4</p>
            </div>
            <div className="question">
              <p>Q2:----------------------------</p>
              <p>q1, q2, q3, q4</p>
            </div>
            <div className="question">
              <p>Q3:----------------------------</p>
              <p>q1, q2, q3, q4</p>
            </div>
            <div className="question">
              <p>Q2:----------------------------</p>
              <p>q1, q2, q3, q4</p>
            </div>
            <div className="question">
              <p>Q2:----------------------------</p>
              <p>q1, q2, q3, q4</p>
            </div>
          </div>
        </div>
      </div>
      <div className="extras">
        <h3>Extras</h3>
        <ul>
          <li>Same Kind</li>
          <li>Similar questions</li>
          <li>Textbook questions</li>
          <li>Competitive exam questions</li>
          <li>Year wise questions</li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default MCQ
