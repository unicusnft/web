import {colors} from "../core/theme";

export const BarChartTicketSupply = ({maxWidth, height, current, total}) => {
    const currentWidth = current * maxWidth / total

    return (
        <div
            style={{
                position: 'relative'
            }}
        >
            <div
                style={{
                    height: height,
                    width: maxWidth,
                    backgroundColor: colors.backgroundComponentLighter,
                    borderRadius: '10px'
                }}
            >

            </div>
            <div
                style={{
                    position: 'absolute',
                    height: height,
                    width: currentWidth,
                    minWidth: 30,
                    backgroundColor: colors.mainColor,
                    borderRadius: '10px',
                    bottom: '0',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    padding: '7px 10px 0 10px',
                    textAlign: 'right',
                    color: 'black'
                }}
            >
                {current}
            </div>
        </div>
    )
}
