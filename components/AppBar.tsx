

export default function AppBar ({ children, value }: { children: any, value: string }) {
    return (
        <div>
            <div>NCU court reservation</div>
            { children }
            { value }
        </div>
    )
}