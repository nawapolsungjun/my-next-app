import Link from "next/link";
type MenubarProps = {
  page: string;
}
export default function MenuBar(props: MenubarProps) {
  return (
    <div>
    <div className="flex justify-around bg-blue-500 p-4 text-3xl ">
      <Link href="/" className="krub-regular">
        หน้าหลัก
      </Link>
      <Link href="/state" className="krub-regular">
        เรียนรู้ State
      </Link>
      <Link href="/props" className="krub-regular">
        เรียนรู้ props
      </Link>
      <Link href="/use-effect" className="krub-regular">
        เรียนรู้ use-effect
      </Link>
    </div>
          <div className="p-4 bg-green-800">
        <p className="text-2xl krub-regular text-center">ตอนนี้คุณอยู่หน้า {props.page}</p>
      </div>
      </div>
  );
}
