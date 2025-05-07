import styles from './RectangleUI.module.scss';

interface RectangleUIProps {
    width: number;
    height: number;
    x?: number;
    y?: number;
    fill: string;
    stroke: string;
    strokeWidth: number;
}

const RectangleUI: React.FC<RectangleUIProps> = ({width, height, x, y, fill, stroke, strokeWidth}) => (
        <div style={{position: "absolute", top: `${x}`, left: `${y}`}}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
            >
                <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    fill={fill}
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                    strokeOpacity={0.5}
                />
            </svg>
        </div>
    )

export default RectangleUI;