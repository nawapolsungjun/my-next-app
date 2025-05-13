type ImageProfileProps = {
    src: string;
}
export default function ImageProfile(props: ImageProfileProps){
    return(
        <div className="flex justify-center">
        <img
            src={props.src}
            alt="Nawapol'S Profile Picture"
            className="rounded"
            />
        </div>
    );
}