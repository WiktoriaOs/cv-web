import Image from 'next/image'
 
export function Avatar({ id, alt }) {
  return <Image src={`/about/${id}.jpg`} alt={alt} width="64" height="64" />
}
 
export function AvatarOfMe() {
  return <Avatar id="1" alt="A portrait of me" />
}