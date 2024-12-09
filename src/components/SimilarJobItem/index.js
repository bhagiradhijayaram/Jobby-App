import './index.css'
import {AiFillStar} from 'react-icons/ai'

import {IoLocationSharp} from 'react-icons/io5'
import {BsFillBriefcaseFill} from 'react-icons/bs'

const SimilarJobItem = props => {
  const {jobDetails} = props
  console.log(jobDetails)
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    title,
    rating,
  } = jobDetails
  return (
    <div className="similar-job-item-container">
      <div className="logo-tile-container">
        <img src={companyLogoUrl} alt="" className="company-logo" />
        <div>
          <p className="job-title">{title}</p>
          <div className="rating-container">
            <AiFillStar className="star-icon-card" />
            <p className="job-rating">{rating}</p>
          </div>
        </div>
      </div>
      <h2>Description</h2>
      <p>{jobDescription}</p>
      <div className="job-type-location">
        <div className="icon-type-container">
          <IoLocationSharp className="type-icon" size={20} />
          <p className="type-text">{location}</p>
        </div>
        <div className="icon-type-container">
          <BsFillBriefcaseFill className="type-icon" size={20} />
          <p className="type-text">{employmentType}</p>
        </div>
      </div>
    </div>
  )
}

export default SimilarJobItem
