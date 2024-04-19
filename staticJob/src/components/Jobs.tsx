import { IoClose } from "react-icons/io5";
import { UseMainContext } from '../../context/MainContext';



const Jobs = () => {

    const { tags, deleteTag, addTag, filteredJobsData } = UseMainContext()


  return (
    <main className="main">
        <div className="main_inner">
            <div className = 'current_tags'>
                {tags.map((item, index) => {
                    return(
                        <div className='picked_tag' key={index}>
                            <p>{item.title} </p>
                            <div onClick={() => deleteTag(item.id)}>
                                <IoClose size={25}/>

                            </div>
                        </div>
                    )
                })}
            </div>

            {filteredJobsData.map((item, index) => {
                return(
                    <div key={index} className="card">
                        <div className="profile">
                            <img src = "assets/images/photosnap.svg" alt="" />
                            <div className="profile_inner">
                                <span>{item.name}</span> <span className = 'new'>New</span><span className = 'feat'>Featured</span>
                                <h2>{item.status}</h2>
                                <span className = 'ago'>{item.when}</span>
                                <span className = 'howto'>{item.howto}</span>
                                <span className = 'region'>{item.region}</span>
                            </div>
                        </div>
                        <div className="tags">
                            {item.tags.map((item, index) => {
                                return(
                                    <p key={index} className = 'box' onClick={() => addTag(item)}>{item}</p>
                                )
                            })}
                        </div>
                    </div>
                )
            })}

        </div>
    </main>
  )
}

export default Jobs