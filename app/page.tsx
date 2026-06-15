"use client";

import Image from "next/image";
import {
  Agriculture,
  AutoAwesome,
  Biotech,
  CheckCircle,
  Download,
  EmojiNature,
  Forest,
  Language,
  LocalFlorist,
  MailOutline,
  PhoneInTalk,
  Science,
  Spa,
  WaterDrop,
  WbSunny,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import { type Messages, getMessages } from "@/app/i18n/translations";
import { useLocale } from "@/app/hooks/useLocale";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { SectionEyebrow } from "@/app/components/SectionEyebrow";

export default function Home() {
  const [locale, setLocale] = useLocale();
  const t: Messages = getMessages(locale);

  return (
    <Box className="min-h-screen" sx={{ bgcolor: "transparent" }}>
      <Navbar locale={locale} setLocale={setLocale} t={t} />

      {/* ── HERO ── */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 12 },
        }}
      >
        {/* Background photo */}
        <Image
          src="/assets/hero-banner-1.png"
          alt=""
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        {/* Brand color overlay for contrast */}
        <Box sx={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(13,42,30,0.97) 0%, rgba(18,56,40,0.95) 40%, rgba(30,91,67,0.94) 75%, rgba(25,91,138,0.94) 100%)",
          pointerEvents: "none",
        }} />
        {/* Decorative circles */}
        <Box sx={{
          position: "absolute", top: -80, right: -80, width: 400, height: 400,
          borderRadius: "50%", background: "radial-gradient(circle, rgba(46,140,94,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <Box sx={{
          position: "absolute", bottom: -120, left: -60, width: 500, height: 500,
          borderRadius: "50%", background: "radial-gradient(circle, rgba(25,91,138,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        {/* Leaf dots pattern */}
        <Box sx={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px", pointerEvents: "none",
        }} />

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
            <Grid size={{ xs: 12, lg: 7 }}>
              <Chip
                label={t.hero.badge}
                size="small"
                sx={{
                  mb: 3,
                  color: "rgba(255,255,255,0.85)",
                  bgcolor: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  fontSize: "0.72rem",
                }}
              />
              <Typography
                variant="h1"
                sx={{
                  color: "white",
                  fontSize: { xs: "2.4rem", sm: "3rem", md: "3.8rem", lg: "4.4rem" },
                  lineHeight: 1.0,
                  letterSpacing: "-0.03em",
                  fontWeight: 800,
                  mb: 3,
                  maxWidth: 700,
                }}
              >
                {t.hero.title}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255,255,255,0.72)",
                  fontWeight: 400,
                  lineHeight: 1.65,
                  maxWidth: 580,
                  mb: 5,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                }}
              >
                {t.hero.subtitle}
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mb={7}>
                <Button
                  href="/assets/gaianexus-brochure.pdf"
                  download
                  variant="contained"
                  size="large"
                  startIcon={<Download />}
                  sx={{
                    color: "white !important",
                    fontWeight: 700,
                    px: 4,
                    py: 1.5,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
                  }}
                >
                  {t.hero.cta_primary}
                </Button>
                <Button
                  href="#technology"
                  variant="outlined"
                  size="large"
                  sx={{
                    color: "#fff !important",
                    borderColor: "rgba(255,255,255,0.35)",
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    "&:hover": { bgcolor: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.6)" },
                  }}
                >
                  {t.hero.cta_secondary}
                </Button>
              </Stack>

              {/* Stats */}
              <Grid container spacing={2}>
                {t.hero.stats.map((stat) => (
                  <Grid key={stat.label} size={{ xs: 12, sm: 4 }}>
                    <Box
                      sx={{
                        p: { xs: 2, md: 2.5 },
                        borderRadius: "16px",
                        bgcolor: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: "1.5rem", md: "1.75rem" },
                          fontWeight: 800,
                          color: "#6ECFA0",
                          lineHeight: 1.1,
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography sx={{ color: "rgba(255,255,255,0.60)", fontSize: "0.82rem", mt: 0.5 }}>
                        {stat.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* Pillars panel */}
            <Grid size={{ xs: 12, lg: 5 }}>
              <Box
                sx={{
                  bgcolor: "rgba(255,255,255,0.06)",
                  borderRadius: "24px",
                  border: "1px solid rgba(255,255,255,0.10)",
                  p: { xs: 3, md: 4 },
                  backdropFilter: "blur(12px)",
                }}
              >
                <Typography
                  variant="overline"
                  sx={{ color: "#6ECFA0", fontWeight: 700, letterSpacing: "0.14em", display: "block", mb: 1 }}
                >
                  {t.hero.pillars.eyebrow}
                </Typography>
                <Typography variant="h5" sx={{ color: "white", fontWeight: 700, mb: 3.5, lineHeight: 1.25 }}>
                  {t.hero.pillars.title}
                </Typography>

                <Stack spacing={3}>
                  {t.hero.pillars.items.map((pillar, i) => {
                    const icons = [<Spa key="spa" />, <Science key="sci" />, <WaterDrop key="water" />];
                    return (
                      <Stack key={pillar.title} direction="row" spacing={2} alignItems="flex-start">
                        <Avatar
                          variant="rounded"
                          sx={{
                            width: 44,
                            height: 44,
                            bgcolor: "rgba(110,207,160,0.15)",
                            color: "#6ECFA0",
                            borderRadius: "12px",
                            flexShrink: 0,
                          }}
                        >
                          {icons[i]}
                        </Avatar>
                        <Box>
                          <Typography sx={{ color: "white", fontWeight: 700, mb: 0.5, fontSize: "0.95rem" }}>
                            {pillar.title}
                          </Typography>
                          <Typography sx={{ color: "rgba(255,255,255,0.58)", fontSize: "0.83rem", lineHeight: 1.55 }}>
                            {pillar.body}
                          </Typography>
                        </Box>
                      </Stack>
                    );
                  })}
                </Stack>

                <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", my: 3.5 }} />
                <Stack direction="row" flexWrap="wrap" gap={1} useFlexGap>
                  {["Soil regeneration", "Crop immunity", "Pollinator safe", "Paddy cultivation"].map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        bgcolor: "rgba(110,207,160,0.12)",
                        color: "#9DE5C0",
                        border: "1px solid rgba(110,207,160,0.20)",
                        fontSize: "0.73rem",
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── VISION ── */}
      <Box sx={{ position: "relative", overflow: "hidden", py: { xs: 7, md: 10 } }}>
        <Image
          src="/assets/hero-banner-2.png"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <Box sx={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(13,42,30,0.96) 0%, rgba(18,56,40,0.94) 45%, rgba(25,91,138,0.92) 100%)",
          pointerEvents: "none",
        }} />
        <Container maxWidth="xl" sx={{ position: "relative" }}>
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                variant="overline"
                sx={{ color: "#6ECFA0", fontWeight: 800, letterSpacing: "0.16em", display: "block", fontSize: "0.72rem" }}
              >
                {t.vision.eyebrow}
              </Typography>
              <Typography variant="h2" sx={{ mt: 1.5, mb: 3, maxWidth: 560, color: "white" }}>
                {t.vision.title}
              </Typography>
              <Typography
                variant="h6"
                component="p"
                sx={{
                  color: "rgba(255,255,255,0.85)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  lineHeight: 1.8,
                  borderLeft: "3px solid",
                  borderColor: "#6ECFA0",
                  pl: 3,
                  maxWidth: 560,
                  fontSize: { xs: "1rem", md: "1.15rem" },
                }}
              >
                &ldquo;{t.vision.quote}&rdquo;
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Grid container spacing={2}>
                {t.vision.impact.map((item) => (
                  <Grid key={item} size={{ xs: 12, sm: 6 }}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2.5,
                        height: "100%",
                        borderRadius: "16px",
                        border: "1px solid rgba(255,255,255,0.18)",
                        bgcolor: "rgba(255,255,255,0.10)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <Stack direction="row" spacing={1.5} alignItems="flex-start">
                        <CheckCircle sx={{ color: "#6ECFA0", fontSize: 20, mt: "1px", flexShrink: 0 }} />
                        <Typography fontWeight={600} sx={{ fontSize: "0.92rem", lineHeight: 1.5, color: "white" }}>
                          {item}
                        </Typography>
                      </Stack>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── MISSION / STORY ── */}
      <Box id="story" sx={{ py: { xs: 9, md: 14 }, bgcolor: "white" }}>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 6, md: 8 }} alignItems="stretch">
            <Grid size={{ xs: 12, md: 5 }}>
              <SectionEyebrow>{t.mission.eyebrow}</SectionEyebrow>
              <Typography variant="h2" sx={{ mt: 1.5, mb: 2.5, maxWidth: 480 }}>
                {t.mission.title}
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 4, lineHeight: 1.75, maxWidth: 440 }}>
                {t.mission.body}
              </Typography>
              <Stack spacing={2.5}>
                {t.mission.points.map((point) => (
                  <Stack key={point} direction="row" spacing={1.75} alignItems="flex-start">
                    <CheckCircle
                      sx={{ color: "primary.main", mt: "1px", fontSize: 22, flexShrink: 0 }}
                    />
                    <Typography color="text.secondary" sx={{ lineHeight: 1.6 }}>{point}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                sx={{
                  bgcolor: "#F4F8F5",
                  borderRadius: "24px",
                  p: { xs: 3, md: 4.5 },
                  height: "100%",
                  border: "1px solid rgba(30,91,67,0.08)",
                }}
              >
                <SectionEyebrow>{t.mission.features.eyebrow}</SectionEyebrow>
                <Typography variant="h4" sx={{ mt: 1.25, mb: 3.5, maxWidth: 440 }}>
                  {t.mission.features.title}
                </Typography>
                <Grid container spacing={2.5}>
                  {t.mission.features.items.map((item, i) => {
                    const icons = [
                      <Agriculture key="ag" fontSize="small" />,
                      <Biotech key="bt" fontSize="small" />,
                      <Science key="sc" fontSize="small" />,
                      <Forest key="fo" fontSize="small" />,
                    ];
                    const colors = ["primary", "secondary", "primary", "primary"] as const;
                    return (
                      <Grid key={item.title} size={{ xs: 12, sm: 6 }}>
                        <Paper
                          elevation={0}
                          sx={{
                            p: 2.5,
                            height: "100%",
                            borderRadius: "16px",
                            bgcolor: "white",
                            border: "1px solid rgba(30,91,67,0.08)",
                            transition: "box-shadow 0.2s, transform 0.2s",
                            "&:hover": {
                              boxShadow: "0 8px 24px rgba(30,91,67,0.10)",
                              transform: "translateY(-2px)",
                            },
                          }}
                        >
                          <Avatar
                            variant="rounded"
                            sx={{
                              width: 40,
                              height: 40,
                              mb: 1.5,
                              bgcolor: i === 1 ? "rgba(25,91,138,0.10)" : "rgba(30,91,67,0.08)",
                              color: i === 1 ? "secondary.main" : "primary.main",
                              borderRadius: "10px",
                            }}
                          >
                            {icons[i]}
                          </Avatar>
                          <Typography fontWeight={700} sx={{ mb: 0.75, fontSize: "0.92rem" }}>
                            {item.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                            {item.body}
                          </Typography>
                        </Paper>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── TECHNOLOGY ── */}
      <Box id="technology" sx={{ py: { xs: 9, md: 14 }, bgcolor: "#F4F8F5" }}>
        <Container maxWidth="xl">
          {/* Section header */}
          <Box sx={{ mb: { xs: 6, md: 8 }, maxWidth: 700 }}>
            <SectionEyebrow>{t.technology.eyebrow}</SectionEyebrow>
            <Typography variant="h2" sx={{ mt: 1.5, mb: 2 }}>{t.technology.title}</Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
              {t.technology.subtitle}
            </Typography>
          </Box>

          {/* Tech cards */}
          <Grid container spacing={3} sx={{ mb: 8 }}>
            {t.technology.cards.map((card, i) => {
              const cardIcons = [
                <AutoAwesome key="aw" />,
                <Agriculture key="ag" />,
                <EmojiNature key="en" />,
              ];
              const cardColors = ["#1E5B43", "#195B8A", "#1E5B43"];
              return (
                <Grid key={card.title} size={{ xs: 12, md: 4 }}>
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: "20px",
                      border: "1px solid rgba(30,91,67,0.08)",
                      transition: "box-shadow 0.2s, transform 0.2s",
                      "&:hover": { boxShadow: "0 16px 40px rgba(30,91,67,0.12)", transform: "translateY(-3px)" },
                    }}
                  >
                    <CardContent sx={{ p: 3.5 }}>
                      <Box
                        sx={{
                          width: 54,
                          height: 54,
                          borderRadius: "14px",
                          bgcolor: `${cardColors[i]}14`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 2.5,
                          color: cardColors[i],
                        }}
                      >
                        {cardIcons[i]}
                      </Box>
                      <Typography variant="h5" fontWeight={700} sx={{ mb: 1.5, letterSpacing: "-0.01em" }}>
                        {card.title}
                      </Typography>
                      <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        {card.body}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>

          {/* Process + Products row */}
          <Grid container spacing={3}>
            {/* 2-step process */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: "20px",
                  height: "100%",
                  border: "1px solid rgba(30,91,67,0.08)",
                  bgcolor: "white",
                }}
              >
                <SectionEyebrow>{t.technology.process.eyebrow}</SectionEyebrow>
                <Typography variant="h4" sx={{ mt: 1.25, mb: 4 }}>
                  {t.technology.process.title}
                </Typography>
                <Stack spacing={4}>
                  {t.technology.process.steps.map((step, i) => {
                    const stepIcons = [<Spa key="s" />, <Biotech key="b" />, <LocalFlorist key="l" />];
                    return (
                      <Stack key={step.step} direction="row" spacing={2.5}>
                        <Box sx={{ position: "relative", flexShrink: 0 }}>
                          <Avatar
                            variant="rounded"
                            sx={{
                              width: 52,
                              height: 52,
                              bgcolor: i === 1 ? "rgba(25,91,138,0.08)" : "rgba(30,91,67,0.08)",
                              color: i === 1 ? "secondary.main" : "primary.main",
                              borderRadius: "14px",
                            }}
                          >
                            {stepIcons[i]}
                          </Avatar>
                          {i < 2 && (
                            <Box sx={{
                              position: "absolute",
                              left: "50%",
                              top: "100%",
                              transform: "translateX(-50%)",
                              width: 2,
                              height: 20,
                              bgcolor: "rgba(30,91,67,0.15)",
                              mt: 0.5,
                            }} />
                          )}
                        </Box>
                        <Box>
                          <Typography
                            variant="caption"
                            sx={{ color: "primary.main", fontWeight: 800, letterSpacing: "0.12em", display: "block" }}
                          >
                            STEP {step.step}
                          </Typography>
                          <Typography variant="h6" fontWeight={700} sx={{ mb: 0.5, mt: 0.25 }}>
                            {step.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
                            {step.body}
                          </Typography>
                        </Box>
                      </Stack>
                    );
                  })}
                </Stack>
              </Paper>
            </Grid>

            {/* Signature products */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: "20px",
                  height: "100%",
                  border: "1px solid rgba(30,91,67,0.08)",
                  bgcolor: "white",
                }}
              >
                <SectionEyebrow>{t.technology.products_section.eyebrow}</SectionEyebrow>
                <Typography variant="h4" sx={{ mt: 1.25, mb: 4 }}>
                  {t.technology.products_section.title}
                </Typography>
                <Stack spacing={2.5}>
                  {t.technology.products_section.items.map((product, i) => {
                    const productIcons = [<LocalFlorist key="lf" />, <WaterDrop key="wd" />, <Spa key="sp" />];
                    const productColors = ["primary.main", "secondary.main", "#8A5A2B"];
                    return (
                      <Box
                        key={product.name}
                        sx={{
                          p: 2.5,
                          borderRadius: "14px",
                          border: "1px solid rgba(30,91,67,0.08)",
                          bgcolor: "#F9FCF9",
                          transition: "all 0.2s",
                          "&:hover": { bgcolor: "#EDF5EF", borderColor: "rgba(30,91,67,0.18)" },
                        }}
                      >
                        <Stack direction="row" spacing={2} alignItems="flex-start">
                          <Avatar
                            variant="rounded"
                            sx={{
                              width: 44,
                              height: 44,
                              bgcolor: i === 1 ? "rgba(25,91,138,0.08)" : i === 2 ? "rgba(138,90,43,0.08)" : "rgba(30,91,67,0.08)",
                              color: productColors[i],
                              borderRadius: "12px",
                              flexShrink: 0,
                            }}
                          >
                            {productIcons[i]}
                          </Avatar>
                          <Box>
                            <Typography fontWeight={800} sx={{ mb: 0.5, fontSize: "0.95rem" }}>
                              {product.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                              {product.body}
                            </Typography>
                          </Box>
                        </Stack>
                      </Box>
                    );
                  })}
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── FIELD VISUAL BANNER ── */}
      <Box sx={{ position: "relative", height: { xs: 280, md: 420 }, overflow: "hidden" }}>
        <Image
          src="/assets/bg3.png"
          alt="Systemic farming in the field — defense priming and harvest"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(13,42,30,0.15) 0%, rgba(13,42,30,0.85) 100%)",
          }}
        />
        <Container maxWidth="xl" sx={{ position: "relative", height: "100%", display: "flex", alignItems: "flex-end", pb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h4"
            sx={{ color: "white", fontWeight: 800, maxWidth: 600, lineHeight: 1.25, fontSize: { xs: "1.6rem", md: "2.2rem" } }}
          >
            {t.technology.process.title}
          </Typography>
        </Container>
      </Box>

      {/* ── BENEFITS ── */}
      <Box
        id="benefits"
        sx={{
          py: { xs: 9, md: 14 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Image
          src="/assets/hero-banner-3.png"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <Box sx={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(13,42,30,0.95) 0%, rgba(30,91,67,0.93) 60%, rgba(25,91,138,0.93) 100%)",
          pointerEvents: "none",
        }} />
        <Box sx={{
          position: "absolute", inset: 0, opacity: 0.03,
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px", pointerEvents: "none",
        }} />
        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={4} alignItems="flex-end" sx={{ mb: { xs: 6, md: 8 } }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                variant="overline"
                sx={{ color: "#6ECFA0", fontWeight: 700, letterSpacing: "0.14em", display: "block", mb: 1 }}
              >
                {t.benefits.eyebrow}
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color: "white",
                  mt: 1,
                  fontSize: { xs: "1.9rem", md: "2.6rem" },
                  lineHeight: 1.1,
                }}
              >
                {t.benefits.title}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography sx={{ color: "rgba(255,255,255,0.62)", lineHeight: 1.7 }}>
                {t.benefits.subtitle}
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            {t.benefits.items.map((item, i) => (
              <Grid key={item} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box
                  sx={{
                    p: 2.5,
                    borderRadius: "16px",
                    bgcolor: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    backdropFilter: "blur(8px)",
                    transition: "all 0.2s",
                    "&:hover": { bgcolor: "rgba(255,255,255,0.10)", borderColor: "rgba(110,207,160,0.30)" },
                    height: "100%",
                  }}
                >
                  <Stack direction="row" spacing={1.75} alignItems="flex-start">
                    <CheckCircle sx={{ color: "#6ECFA0", mt: "1px", fontSize: 20, flexShrink: 0 }} />
                    <Typography sx={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.6, fontSize: "0.92rem" }}>
                      {item}
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── PRODUCTS ── */}
      <Box sx={{ py: { xs: 9, md: 14 }, bgcolor: "white" }}>
        <Container maxWidth="xl">
          <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: "center", maxWidth: 640, mx: "auto" }}>
            <SectionEyebrow>{t.products.eyebrow}</SectionEyebrow>
            <Typography variant="h2" sx={{ mt: 1.5, mb: 2 }}>{t.products.title}</Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
              {t.products.subtitle}
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {t.products.items.map((item, i) => {
              const productImages: Record<number, string> = {
                0: "/assets/aman-bio-vaccine.png",
                1: "/assets/aman-bio-cocktail.png",
                2: "/assets/bacillus-subtilis-seaweed.png",
              };
              const productIcons = [
                <WbSunny key="ws" />,
                <Biotech key="bt" />,
                <Forest key="fo" />,
                <Biotech key="bcp" />,
                <WaterDrop key="oc" />,
                <Forest key="td" />,
                <Science key="te" />,
                <AutoAwesome key="np" />,
                <Agriculture key="tf" />,
                <Spa key="tc" />,
              ];
              const gradients = [
                "linear-gradient(135deg, rgba(30,91,67,0.06) 0%, rgba(30,91,67,0.02) 100%)",
                "linear-gradient(135deg, rgba(25,91,138,0.06) 0%, rgba(25,91,138,0.02) 100%)",
                "linear-gradient(135deg, rgba(138,90,43,0.06) 0%, rgba(138,90,43,0.02) 100%)",
              ];
              const tagColors = [
                { bgcolor: "rgba(30,91,67,0.08)", color: "primary.main" },
                { bgcolor: "rgba(25,91,138,0.08)", color: "secondary.main" },
                { bgcolor: "rgba(138,90,43,0.08)", color: "#6E4A2F" },
              ];
              const avatarColors = [
                { bgcolor: "rgba(30,91,67,0.10)", color: "primary.main" },
                { bgcolor: "rgba(25,91,138,0.10)", color: "secondary.main" },
                { bgcolor: "rgba(138,90,43,0.10)", color: "#8A5A2B" },
              ];
              const palette = i % 3;
              const image = productImages[i];
              return (
                <Grid key={item.name} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: "20px",
                      border: "1px solid rgba(30,91,67,0.08)",
                      background: gradients[palette],
                      transition: "box-shadow 0.2s, transform 0.2s",
                      "&:hover": { boxShadow: "0 16px 48px rgba(30,91,67,0.12)", transform: "translateY(-4px)" },
                      overflow: "hidden",
                    }}
                  >
                    {image && (
                      <Box sx={{ position: "relative", height: 240, width: "100%" }}>
                        <Image
                          src={image}
                          alt={item.name}
                          fill
                          style={{ objectFit: "cover", objectPosition: "top center" }}
                        />
                      </Box>
                    )}
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                      {!image && (
                        <Avatar
                          variant="rounded"
                          sx={{
                            width: 56,
                            height: 56,
                            mb: 2.5,
                            borderRadius: "16px",
                            ...avatarColors[palette],
                          }}
                        >
                          {productIcons[i]}
                        </Avatar>
                      )}
                      <Chip
                        label={item.tag}
                        size="small"
                        sx={{
                          mb: 2,
                          ...tagColors[palette],
                          fontWeight: 600,
                          fontSize: "0.7rem",
                          borderRadius: "6px",
                          height: 24,
                        }}
                      />
                      <Typography variant="h5" fontWeight={700} sx={{ mb: 2, letterSpacing: "-0.01em" }}>
                        {item.name}
                      </Typography>
                      <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
                        {item.body}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>

          {/* Collaboration badge */}
          <Box sx={{ mt: 6, textAlign: "center" }}>
            <Chip
              icon={<AutoAwesome sx={{ fontSize: 16 }} />}
              label={t.footer.collaboration}
              sx={{
                bgcolor: "rgba(30,91,67,0.06)",
                color: "primary.main",
                border: "1px solid rgba(30,91,67,0.12)",
                fontWeight: 600,
                px: 1,
                py: 0.5,
                height: "auto",
                "& .MuiChip-label": { py: 0.75 },
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* ── MARKETING PARTNERS ── */}
      <Box sx={{ py: { xs: 9, md: 14 }, bgcolor: "white" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", maxWidth: 720, mx: "auto", mb: { xs: 6, md: 8 } }}>
            <SectionEyebrow>{t.partners.eyebrow}</SectionEyebrow>
            <Typography variant="h2" sx={{ mt: 1.5, mb: 2 }}>
              {t.partners.title}
            </Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
              {t.partners.subtitle}
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {(() => {
              const partnerIcons = [<Biotech key="ba" />, <Agriculture key="rd" />, <Spa key="ad" />, <EmojiNature key="fc" />];
              const avatarColors = [
                { bgcolor: "rgba(30,91,67,0.10)", color: "primary.main" },
                { bgcolor: "rgba(25,91,138,0.10)", color: "secondary.main" },
                { bgcolor: "rgba(138,90,43,0.10)", color: "#8A5A2B" },
                { bgcolor: "rgba(110,207,160,0.18)", color: "primary.dark" },
              ];
              return t.partners.items.map((partner, i) => (
                <Grid key={partner.name} size={{ xs: 12, sm: 6, md: 3 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3.5,
                      height: "100%",
                      textAlign: "center",
                      borderRadius: "20px",
                      border: "1px solid rgba(30,91,67,0.08)",
                    }}
                  >
                    <Avatar sx={{ width: 56, height: 56, mx: "auto", mb: 2, ...avatarColors[i % avatarColors.length] }}>
                      {partnerIcons[i % partnerIcons.length]}
                    </Avatar>
                    <Typography fontWeight={700} sx={{ mb: 0.5 }}>
                      {partner.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {partner.role}
                    </Typography>
                  </Paper>
                </Grid>
              ));
            })()}
          </Grid>

          <Box sx={{ textAlign: "center", mt: 5 }}>
            <Button
              href="/#contact"
              variant="contained"
              size="large"
              sx={{ fontWeight: 700, px: 4, color: "white !important" }}
            >
              {t.partners.cta}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ── CONTACT ── */}
      <Box id="contact" sx={{ py: { xs: 9, md: 14 }, bgcolor: "#F4F8F5" }}>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
            {/* Intro */}
            <Grid size={{ xs: 12, md: 5 }}>
              <SectionEyebrow>{t.contact.eyebrow}</SectionEyebrow>
              <Typography variant="h2" sx={{ mt: 1.5, mb: 2.5, maxWidth: 440 }}>
                {t.contact.title}
              </Typography>
              <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
                {t.contact.body}
              </Typography>
            </Grid>

            {/* Contact details */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4.5 },
                  borderRadius: "24px",
                  border: "1px solid rgba(30,91,67,0.08)",
                  bgcolor: "white",
                  boxShadow: "0 20px 60px rgba(30,91,67,0.08)",
                }}
              >
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: "12px",
                          bgcolor: "rgba(30,91,67,0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <MailOutline sx={{ color: "primary.main", fontSize: 20 }} />
                      </Box>
                      <Box>
                        <Typography variant="caption" color="text.secondary" display="block" fontWeight={600}>
                          {t.contact.info.email_label}
                        </Typography>
                        <Typography
                          component="a"
                          href={`mailto:${t.contact.info.email}`}
                          fontWeight={600}
                          color="primary.main"
                          sx={{ textDecoration: "none" }}
                        >
                          {t.contact.info.email}
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: "12px",
                          bgcolor: "rgba(30,91,67,0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Language sx={{ color: "primary.main", fontSize: 20 }} />
                      </Box>
                      <Box>
                        <Typography variant="caption" color="text.secondary" display="block" fontWeight={600}>
                          {t.contact.info.website_label}
                        </Typography>
                        <Typography
                          component="a"
                          href={`https://${t.contact.info.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          fontWeight={600}
                          sx={{ textDecoration: "none", color: "text.primary" }}
                        >
                          {t.contact.info.website}
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid>
                  {t.contact.info.phones.map((phone) => (
                    <Grid key={phone} size={{ xs: 12, sm: 6 }}>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Box
                          sx={{
                            width: 44,
                            height: 44,
                            borderRadius: "12px",
                            bgcolor: "rgba(30,91,67,0.08)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <PhoneInTalk sx={{ color: "primary.main", fontSize: 20 }} />
                        </Box>
                        <Box>
                          <Typography variant="caption" color="text.secondary" display="block" fontWeight={600}>
                            {t.contact.info.phone_label}
                          </Typography>
                          <Typography
                            component="a"
                            href={`tel:${phone.replace(/\s+/g, "")}`}
                            fontWeight={600}
                            sx={{ textDecoration: "none", color: "text.primary" }}
                          >
                            {phone}
                          </Typography>
                        </Box>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>

                <Box
                  sx={{
                    mt: 3,
                    p: 3,
                    borderRadius: "16px",
                    bgcolor: "rgba(30,91,67,0.06)",
                    border: "1px solid rgba(30,91,67,0.10)",
                  }}
                >
                  <Typography variant="caption" color="text.secondary" display="block" fontWeight={700} mb={0.5}>
                    {t.contact.info.collab_label}
                  </Typography>
                  <Typography fontWeight={700} color="primary.main">{t.contact.info.collab}</Typography>
                </Box>

                <Button
                  href="/assets/gaianexus-brochure.pdf"
                  download
                  variant="contained"
                  size="large"
                  fullWidth
                  startIcon={<Download />}
                  sx={{ mt: 3, fontWeight: 700, py: 1.4, color: "white !important" }}
                >
                  {t.hero.cta_primary}
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── CTA BANNER ── */}
      <Box sx={{ position: "relative", overflow: "hidden", py: { xs: 8, md: 11 } }}>
        <Image
          src="/assets/bg2.png"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <Box sx={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(13,42,30,0.97) 0%, rgba(30,91,67,0.96) 60%, rgba(25,91,138,0.95) 100%)",
          pointerEvents: "none",
        }} />
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{ color: "white", fontWeight: 800, fontSize: { xs: "1.9rem", md: "2.6rem" }, mb: 2, letterSpacing: "-0.01em" }}
          >
            {t.contact.title}
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.78)", fontSize: "1.05rem", mb: 4, maxWidth: 560, mx: "auto", lineHeight: 1.7 }}>
            {t.contact.body}
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
            <Button
              href="/assets/gaianexus-brochure.pdf"
              download
              variant="contained"
              size="large"
              startIcon={<Download />}
              sx={{
                color: "white !important", fontWeight: 700, px: 4,
              }}
            >
              {t.contact.brochureLabel}
            </Button>
            <Button
              href="tel:+917708240744"
              variant="outlined"
              size="large"
              startIcon={<PhoneInTalk />}
              sx={{
                color: "white", borderColor: "rgba(255,255,255,0.4)", fontWeight: 700, px: 4,
                "&:hover": { borderColor: "white", bgcolor: "rgba(255,255,255,0.08)" },
              }}
            >
              {t.contact.info.phone_label}
            </Button>
          </Stack>
        </Container>
      </Box>

      <Footer locale={locale} setLocale={setLocale} t={t} />
    </Box>
  );
}
