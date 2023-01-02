export default function Button({ value }: { value: string }) {
    return (
<button className="text-white p-2 rounded bg-teal-500 hover:bg-teal-600">{value}</button>
    
    )
}