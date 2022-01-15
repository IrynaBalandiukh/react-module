export default function Flight(props) {
    let {item} = props;

    return (
        <div className='mission_block'>
            <div>
                <h1>{item.mission_name}</h1>
                {item.launch_year}
            </div>
            <img src={item.links.mission_patch_small} alt="mission_icon"/>
        </div>
    )
}