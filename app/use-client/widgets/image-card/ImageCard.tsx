'use client'
import React from 'react'
import { Card, CardPreview, CardHeader, makeStyles, shorthands, tokens, Text, Caption1 } from '@fluentui/react-components'
import { Button } from '@/app/use-client'
import { MoreHorizontal20Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
    main: {
        ...shorthands.gap("16px"),
        display: "flex",
        flexWrap: "wrap",
    },

    card: {
        width: "400px",
        maxWidth: "100%",
        height: "fit-content",
    },

    caption: {
        color: tokens.colorNeutralForeground3,
    },

    smallRadius: {
        ...shorthands.borderRadius(tokens.borderRadiusSmall),
    },

    grayBackground: {
        backgroundColor: tokens.colorNeutralBackground3,
    },

    logoBadge: {
        ...shorthands.padding("5px"),
        ...shorthands.borderRadius(tokens.borderRadiusSmall),
        backgroundColor: "#FFF",
        boxShadow:
            "0px 1px 2px rgba(0, 0, 0, 0.14), 0px 0px 2px rgba(0, 0, 0, 0.12)",
    },
});

const resolveAsset = (asset: string) => {
    const ASSET_URL =
        "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/";

    return `${ASSET_URL}${asset}`;
};


type ImageCardProps = {
    uri?: string
}

function ImageCard(porps: ImageCardProps) {
    const styles = useStyles();
    return (
        <Card>
            <CardPreview
                className={styles.grayBackground}
                logo={
                    <img
                        className={styles.logoBadge}
                        src={porps.uri}
                        alt="Figma app logo"
                    />
                }
            >
                <img
                    className={styles.smallRadius}
                    src={porps.uri}
                    alt="Presentation Preview"
                />
            </CardPreview>

            <CardHeader
                header={<Text weight="semibold">iOS App Prototype</Text>}
                description={
                    <Caption1 className={styles.caption}>You created 53m ago</Caption1>
                }
                action={
                    <Button
                        appearance="transparent"
                        icon={<MoreHorizontal20Regular />}
                        aria-label="More actions"
                    />
                }
            />
        </Card>
    )
}

export default ImageCard