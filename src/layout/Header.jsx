import React from 'react';
import FlexBetween from 'components/FlexBetween';
import { Box, Link, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import CommonButton from 'components/CommonButton';
import WalletIcon from 'Icons/WalletIcon';

const navMenu = [
    {
        title: 'Home',
    },
    {
        title: 'Explore',
    },
    {
        title: 'Products',
    },
    {
        title: 'Activity',
    },
    {
        title: 'Elements',
    },
]

const Header = () => {

    const theme = useTheme();
    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 10,
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                background: theme.palette.backgroundColor
            }}
        >
            <FlexBetween
                sx={{
                    maxWidth: "1429px",
                    width: "100%",
                    height: "100px",
                    marginInline: "auto"
                }}
            >
                {/* LOGO */}
                <Box>
                    <Link href="#">
                        <img srcSet="../assets/logo.png 2x" alt="logo.png" />
                    </Link>
                </Box>
                {/* NAV MENU ITEM */}
                <FlexBetween gap="30px">
                    <FlexBetween gap="30px">
                        {
                            navMenu.map((item) => (
                                <Link href="#" sx={{ textDecoration: "none" }}>
                                    < Typography
                                        fontSize="25px"
                                        color={theme.palette.defaultColor}
                                    >
                                        {item.title}
                                    </Typography>
                                </Link>
                            ))
                        }
                    </FlexBetween>
                    <Box>
                        <CommonButton sx={{
                            background: theme.palette.primaryColor,
                            height: "50px"
                        }}>
                            <WalletIcon />
                            <Typography variant="secondFontFamily" fontSize="25px"
                                color={theme.palette.defaultColor}
                            >
                                Wallet
                            </Typography>
                        </CommonButton>
                    </Box>
                </FlexBetween>

            </FlexBetween >
        </Box >
    );
};

export default Header;