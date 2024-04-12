export function Video({
  videoId
}:{
  videoId: string;
}) {
  return (
    <div className='mt-4 flex justify-center items-center' >
      <div className='aspect-video w-1/2 h-1/2 flex justify-center items-center' >
        <iframe
          className='h-full w-full rounded-lg'
          src={`https://www.youtube.com/embed/${videoId}`}
          width="100%"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen>
        </iframe>
      </div>
    </div>
  );
}