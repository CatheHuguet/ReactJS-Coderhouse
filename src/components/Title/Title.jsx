import './Title.css'

const Title = ({title, subtitle}) => {
    return (
      <div>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </div>
    )
}
export default Title