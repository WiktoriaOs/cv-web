import Image from 'next/image'
import logoImg from '@/app/about/images/1.jpg';
 
export default function Avatar({ id, alt }) {
  return <Image src={`/about/${id}.jpg`} alt={alt} width="64" height="64" />
}
 
export default function Avataro() {
  return <Avatar id={logoImg} alt="A portrait of me" />
}