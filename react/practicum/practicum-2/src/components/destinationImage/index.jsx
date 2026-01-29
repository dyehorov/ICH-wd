export default function DestinationImage({ imageUrl, name }) {
  return <img src={imageUrl} alt={`${name} image`} />
}
