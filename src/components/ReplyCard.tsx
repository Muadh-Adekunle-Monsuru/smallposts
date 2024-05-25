import ReplyCounter from './ReplyCounter';

export default function ReplyCard(props: any) {
	const { poster, createdAt, content, id } = props.data;
	const replyingTo = props.replyingTo;
	const parentId = props.parentId;
	return (
		<div className='bg-slate-50 p-5 flex flex-col lg:flex-row border border-t rounded-lg  gap-2 relative md:w-[55%] w-[90%] lg:-mr-14 -mr-3'>
			{/* <div className='order-2 lg:order-1'>
				<ReplyCounter id={id} parentId={parentId} />
			</div> */}
			<div className='order-1 lg:order-2 flex flex-col gap-3'>
				<div className='flex justify-between items-center'>
					<div className='flex gap-2 items-center'>
						<div className='flex gap-2 items-center'>
							<div className='w-5 h-5 rounded-full overflow-hidden '>
								<img src={poster.profile} className='w-5 h-5' alt='avatar' />
							</div>
							<span className='font-semibold text-sm'>{poster.username}</span>
						</div>
						<div className='text-xs text-gray-400'>{createdAt}</div>
					</div>
				</div>
				<p className='font-light'>
					<span className='font-bold'> </span>
					{content}
				</p>
			</div>
		</div>
	);
}
