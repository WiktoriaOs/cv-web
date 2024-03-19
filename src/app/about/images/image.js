import Image from 'next/image'
 
export function Avatar() {
  return <Image src={`/about/1.jpg`} width="64" height="64" />
}
 
export function AvatarOfMe() {
  return <Avatar id="me" alt="A portrait of me" />
}