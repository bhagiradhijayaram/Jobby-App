import {AiFillStar} from 'react-icons/ai'
import {IoLocationSharp} from 'react-icons/io5'
import {BsFillBriefcaseFill} from 'react-icons/bs'

import {Link} from 'react-router-dom'
import './index.css'

const JobCard = props => {
  const {jobDetails} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = jobDetails
  return (
    <li className="job-card-list-item">
      <Link to={`/jobs/${id}`} className="job-card-link">
        <div className="job-card-container">
          <div className="logo-tile-container">
            <img
              src={companyLogoUrl}
              alt="company logo"
              className="company-logo"
            />
            <div>
              <p className="job-title">{title}</p>
              <div className="rating-container">
                <AiFillStar className="star-icon-card" />
                <p className="job-rating">{rating}</p>
              </div>
            </div>
          </div>
          <div className="job-type-location-container">
            <div className="job-type-location">
              <div className="icon-type-container">
                <IoLocationSharp className="type-icon" />
                <p className="type-text">{location}</p>
              </div>
              <div className="icon-type-container">
                <BsFillBriefcaseFill className="type-icon" />
                <p className="type-text">{employmentType}</p>
              </div>
            </div>
            <p className="package">{packagePerAnnum}</p>
          </div>

          <hr color="#ffffff" />
          <div>
            <p className="description">Description</p>
            <p className="job-description">{jobDescription}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default JobCard
