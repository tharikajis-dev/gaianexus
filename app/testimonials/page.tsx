"use client";

import { FormatQuote } from "@mui/icons-material";
import { Avatar, Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";

import { type Messages, getMessages } from "@/app/i18n/translations";
import { useLocale } from "@/app/hooks/useLocale";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { SectionEyebrow } from "@/app/components/SectionEyebrow";

export default function TestimonialsPage() {
  const [locale, setLocale] = useLocale();
  const t: Messages = getMessages(locale);

  const avatarColors = [
    { bgcolor: "rgba(30,91,67,0.10)", color: "primary.main" },
    { bgcolor: "rgba(25,91,138,0.10)", color: "secondary.main" },
    { bgcolor: "rgba(138,90,43,0.10)", color: "#8A5A2B" },
    { bgcolor: "rgba(110,207,160,0.18)", color: "primary.dark" },
  ];

  return (
    <Box className="min-h-screen" sx={{ bgcolor: "transparent" }}>
      <Navbar locale={locale} setLocale={setLocale} t={t} />

      <Box sx={{ py: { xs: 9, md: 14 } }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", maxWidth: 720, mx: "auto", mb: { xs: 6, md: 8 } }}>
            <SectionEyebrow>{t.testimonials.eyebrow}</SectionEyebrow>
            <Typography variant="h2" sx={{ mt: 1.5, mb: 2 }}>
              {t.testimonials.title}
            </Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
              {t.testimonials.subtitle}
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {t.testimonials.items.map((item, i) => (
              <Grid key={item.name} size={{ xs: 12, md: 6 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    height: "100%",
                    borderRadius: "20px",
                    border: "1px solid rgba(30,91,67,0.08)",
                    bgcolor: "white",
                    boxShadow: "0 12px 40px rgba(30,91,67,0.06)",
                  }}
                >
                  <FormatQuote sx={{ fontSize: 32, color: "rgba(30,91,67,0.18)", mb: 1 }} />
                  <Typography sx={{ color: "text.primary", lineHeight: 1.8, mb: 3, fontStyle: "italic" }}>
                    &ldquo;{item.quote}&rdquo;
                  </Typography>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar sx={{ width: 44, height: 44, fontWeight: 700, ...avatarColors[i % avatarColors.length] }}>
                      {item.name.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography fontWeight={700}>{item.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.role}
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer locale={locale} setLocale={setLocale} t={t} />
    </Box>
  );
}
