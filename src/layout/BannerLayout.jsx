import React from 'react';
import FlexBetween from 'components/FlexBetween';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import CommonButton from 'components/CommonButton';

const statistic = [
    {
        amount: 26,
        title: "Artwork"
    },
    {
        amount: 18,
        title: "Aucation"
    },
    {
        amount: 8,
        title: "Artist"
    }
]

const BannerLayout = () => {
    const theme = useTheme();
    return (
        <Box
            pt="100px"
        >
            <FlexBetween
                gap="164px"
                mt="229px"
                sx={{
                    display: "flex",
                    maxWidth: "1429px",
                    width: "100%",
                    marginInline: "auto",
                }}
            >
                {/* CONTENT BANNER */}
                <Box
                    sx={{
                        maxWidth: "748px",
                        width: "100%",
                    }}
                >
                    <Typography
                        fontSize="100px"
                        fontWeight="700"
                    >
                        Discover <br />
                        Collect and <br />
                        Sell NFT.
                    </Typography>
                    <Typography fontSize="30px" variant="secondFontFamily">
                        <br />
                        Explore on the world’s best largest NFT marketplace
                    </Typography>
                    <Box
                        mt="68px"
                    >
                        <CommonButton
                            sx={{
                                background: theme.palette.rainbowColor,
                                height: "60px",
                                borderRadius: "15px",
                                minWidth: "250px",
                            }}
                        >
                            <Typography variant="secondFontFamily" fontSize="25px"
                                color={theme.palette.defaultColor}
                            >
                                Explore
                            </Typography>
                        </CommonButton>
                    </Box>
                    <Box
                        mt="50px"
                        gap="50px"
                        sx={{
                            display: "flex"
                        }}
                    >
                        {
                            statistic.map((item) => (
                                <Box
                                    sx={{ textAlign: "center" }}
                                >
                                    < Typography
                                        fontSize="50px"
                                    >
                                        {item.amount}K+
                                    </Typography>
                                    <Typography fontSize="20px" variant="secondFontFamily">
                                        {item.title}
                                    </Typography>
                                </Box>
                            ))
                        }
                    </Box>
                </Box>
                {/* IMAGE BANNER */}
                <Box>
                    <Box
                        sx={{
                            position: "relative"
                        }}
                    >
                        <img srcSet="../assets/lineBanner.svg" alt="lineBanner"
                            style={{
                                position: "absolute",
                            }}
                            width="526px"
                            height="614px"
                        />
                        <img srcSet="../assets/bannerLogo.png" alt="bannerLogo"
                            width="526px"
                            height="614px"
                        />
                    </Box>
                </Box>
            </FlexBetween>
        </Box>
    );
};

export default BannerLayout;