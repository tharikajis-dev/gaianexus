"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  Agriculture,
  AutoAwesome,
  Biotech,
  CheckCircle,
  Close,
  EmojiNature,
  Forest,
  Language,
  LocalFlorist,
  MailOutline,
  Menu,
  PhoneInTalk,
  Science,
  Spa,
  WaterDrop,
  WbSunny,
} from "@mui/icons-material";
import {
  Alert,
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Drawer,
  FormControlLabel,
  Grid,
  IconButton,
  MenuItem,
  Paper,
  Stack,
  Switch,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

import { type Locale, type Messages, getMessages, localeLabels, locales } from "@/app/i18n/translations";

type FormState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const [formState, setFormState] = useState<FormState>({ status: "idle" });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t: Messages = getMessages(locale);

  useEffect(() => {
    const saved = window.localStorage.getItem("gaia-locale") as Locale | null;
    if (saved && locales.includes(saved)) setLocale(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    window.localStorage.setItem("gaia-locale", locale);
  }, [locale]);

  const interestOptions = useMemo(() => t.contact.interests, [t]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setFormState({ status: "submitting" });

    const payload = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      interest: formData.get("interest"),
      requestBrochure: formData.get("requestBrochure") === "on",
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(data.message ?? "Something went wrong.");

      form.reset();
      setFormState({ status: "success", message: data.message ?? "Request sent successfully." });
    } catch (error) {
      setFormState({
        status: "error",
        message: error instanceof Error ? error.message : "Unable to send request.",
      });
    }
  }

  const navLinks = [
    { label: t.nav.story, href: "#story" },
    { label: t.nav.technology, href: "#technology" },
    { label: t.nav.benefits, href: "#benefits" },
  ];

  return (
    <Box className="min-h-screen" sx={{ bgcolor: "background.default" }}>
      {/* ── NAVBAR ── */}
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(30,91,67,0.10)",
          bgcolor: "rgba(255,255,255,0.90)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 }, gap: 2, justifyContent: "space-between" }}>
            {/* Logo */}
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #1E5B43 0%, #2D8C5E 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(30,91,67,0.30)",
                }}
              >
                <EmojiNature sx={{ color: "white", fontSize: 22 }} />
              </Box>
              <Box>
                <Typography
                  variant="subtitle1"
                  fontWeight={800}
                  sx={{ lineHeight: 1.1, color: "primary.dark", letterSpacing: "-0.02em" }}
                >
                  Gaia Nexus
                </Typography>
                <Typography variant="caption" sx={{ color: "text.secondary", fontSize: "0.68rem" }}>
                  Private Limited
                </Typography>
              </Box>
            </Stack>

            {/* Desktop Nav */}
            <Stack
              direction="row"
              spacing={0.5}
              alignItems="center"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  href={link.href}
                  color="inherit"
                  sx={{
                    fontWeight: 600,
                    color: "text.primary",
                    "&:hover": { color: "primary.main", bgcolor: "rgba(30,91,67,0.06)" },
                  }}
                >
                  {link.label}
                </Button>
              ))}
              <Button
                href="#contact"
                variant="contained"
                sx={{ ml: 1, px: 3, fontWeight: 700 }}
              >
                {t.nav.contact}
              </Button>
              <TextField
                select
                size="small"
                value={locale}
                onChange={(e) => setLocale(e.target.value as Locale)}
                sx={{
                  ml: 1.5,
                  minWidth: 130,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    bgcolor: "rgba(30,91,67,0.05)",
                    "& fieldset": { borderColor: "rgba(30,91,67,0.15)" },
                  },
                }}
                InputProps={{ startAdornment: <Language sx={{ mr: 1, fontSize: 18, color: "primary.main" }} /> }}
              >
                {locales.map((loc) => (
                  <MenuItem key={loc} value={loc}>{localeLabels[loc]}</MenuItem>
                ))}
              </TextField>
            </Stack>

            {/* Mobile menu button */}
            <IconButton
              sx={{ display: { xs: "flex", md: "none" } }}
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor={locale === "ar" ? "right" : "left"}
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        PaperProps={{ sx: { width: 280, p: 3 } }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography fontWeight={800} color="primary.main">Gaia Nexus</Typography>
          <IconButton onClick={() => setMobileMenuOpen(false)}><Close /></IconButton>
        </Stack>
        <Stack spacing={1}>
          {navLinks.map((link) => (
            <Button
              key={link.href}
              href={link.href}
              fullWidth
              color="inherit"
              sx={{ justifyContent: "flex-start", fontWeight: 600 }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Button>
          ))}
          <Button
            href="#contact"
            variant="contained"
            fullWidth
            sx={{ mt: 1 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.nav.contact}
          </Button>
          <Divider sx={{ my: 1 }} />
          <TextField
            select
            size="small"
            fullWidth
            value={locale}
            onChange={(e) => setLocale(e.target.value as Locale)}
            label="Language"
          >
            {locales.map((loc) => (
              <MenuItem key={loc} value={loc}>{localeLabels[loc]}</MenuItem>
            ))}
          </TextField>
        </Stack>
      </Drawer>

      {/* ── HERO ── */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #0D2A1E 0%, #123828 40%, #1E5B43 75%, #195B8A 100%)",
          position: "relative",
          overflow: "hidden",
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 12 },
        }}
      >
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
                  href="#contact"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "white",
                    color: "primary.dark",
                    fontWeight: 700,
                    px: 4,
                    py: 1.5,
                    "&:hover": { bgcolor: "#E8F3EC" },
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
                    color: "white",
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

      {/* ── BENEFITS ── */}
      <Box
        id="benefits"
        sx={{
          py: { xs: 9, md: 14 },
          background: "linear-gradient(135deg, #0D2A1E 0%, #1E5B43 60%, #195B8A 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
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
              const productIcons = [<WbSunny key="ws" />, <Biotech key="bt" />, <Forest key="fo" />];
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
              return (
                <Grid key={item.name} size={{ xs: 12, md: 4 }}>
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: "20px",
                      border: "1px solid rgba(30,91,67,0.08)",
                      background: gradients[i],
                      transition: "box-shadow 0.2s, transform 0.2s",
                      "&:hover": { boxShadow: "0 16px 48px rgba(30,91,67,0.12)", transform: "translateY(-4px)" },
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                      <Avatar
                        variant="rounded"
                        sx={{
                          width: 56,
                          height: 56,
                          mb: 2.5,
                          bgcolor: i === 1 ? "rgba(25,91,138,0.10)" : i === 2 ? "rgba(138,90,43,0.10)" : "rgba(30,91,67,0.10)",
                          color: i === 1 ? "secondary.main" : i === 2 ? "#8A5A2B" : "primary.main",
                          borderRadius: "16px",
                        }}
                      >
                        {productIcons[i]}
                      </Avatar>
                      <Chip
                        label={item.tag}
                        size="small"
                        sx={{
                          mb: 2,
                          ...tagColors[i],
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

      {/* ── CONTACT ── */}
      <Box id="contact" sx={{ py: { xs: 9, md: 14 }, bgcolor: "#F4F8F5" }}>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 6, md: 8 }} alignItems="stretch">
            {/* Info panel */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <SectionEyebrow>{t.contact.eyebrow}</SectionEyebrow>
                <Typography variant="h2" sx={{ mt: 1.5, mb: 2.5, maxWidth: 440 }}>
                  {t.contact.title}
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.75, mb: 4 }}>
                  {t.contact.body}
                </Typography>

                <Stack spacing={3} sx={{ mb: 4 }}>
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
                      <Typography fontWeight={600} color="primary.main">{t.contact.info.email}</Typography>
                    </Box>
                  </Stack>
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
                      <Typography fontWeight={600}>{t.contact.info.phone}</Typography>
                    </Box>
                  </Stack>
                </Stack>

                <Box
                  sx={{
                    p: 3,
                    borderRadius: "16px",
                    bgcolor: "rgba(30,91,67,0.06)",
                    border: "1px solid rgba(30,91,67,0.10)",
                    mt: "auto",
                  }}
                >
                  <Typography variant="caption" color="text.secondary" display="block" fontWeight={700} mb={0.5}>
                    {t.contact.info.collab_label}
                  </Typography>
                  <Typography fontWeight={700} color="primary.main">{t.contact.info.collab}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75, lineHeight: 1.6 }}>
                    {t.contact.brochureLabel} and contact requests are managed in the same form.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Contact form */}
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
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={2.5}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        required
                        name="fullName"
                        label={t.contact.fields.fullName}
                        sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        required
                        type="email"
                        name="email"
                        label={t.contact.fields.email}
                        sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        name="company"
                        label={t.contact.fields.company}
                        sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        name="phone"
                        label={t.contact.fields.phone}
                        sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        select
                        name="interest"
                        defaultValue={interestOptions[0]}
                        label={t.contact.fields.interest}
                        sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
                      >
                        {interestOptions.map((option) => (
                          <MenuItem key={option} value={option}>{option}</MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        required
                        multiline
                        minRows={4}
                        name="message"
                        label={t.contact.fields.message}
                        sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Box
                        sx={{
                          p: 2,
                          borderRadius: "12px",
                          bgcolor: "rgba(30,91,67,0.04)",
                          border: "1px solid rgba(30,91,67,0.10)",
                        }}
                      >
                        <FormControlLabel
                          control={<Switch name="requestBrochure" color="primary" />}
                          label={
                            <Typography variant="body2" fontWeight={600}>
                              {t.contact.fields.brochure}
                            </Typography>
                          }
                        />
                      </Box>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems="flex-start">
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          disabled={formState.status === "submitting"}
                          sx={{ px: 4, py: 1.5, fontWeight: 700 }}
                        >
                          {formState.status === "submitting"
                            ? t.contact.fields.sending
                            : t.contact.fields.submit}
                        </Button>
                        {formState.status === "success" && (
                          <Alert
                            severity="success"
                            sx={{ borderRadius: "12px", flex: 1, alignItems: "center" }}
                          >
                            {formState.message}
                          </Alert>
                        )}
                        {formState.status === "error" && (
                          <Alert
                            severity="error"
                            sx={{ borderRadius: "12px", flex: 1, alignItems: "center" }}
                          >
                            {formState.message}
                          </Alert>
                        )}
                      </Stack>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── FOOTER ── */}
      <Box
        component="footer"
        sx={{
          bgcolor: "#0D2A1E",
          color: "white",
          pt: { xs: 8, md: 10 },
          pb: { xs: 5, md: 6 },
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 5, md: 6 }} sx={{ mb: { xs: 6, md: 8 } }}>
            {/* Brand column */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack direction="row" spacing={1.5} alignItems="center" mb={2.5}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, #1E5B43 0%, #2D8C5E 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <EmojiNature sx={{ color: "white", fontSize: 20 }} />
                </Box>
                <Box>
                  <Typography fontWeight={800} sx={{ lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                    Gaia Nexus
                  </Typography>
                  <Typography sx={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.45)" }}>
                    Private Limited
                  </Typography>
                </Box>
              </Stack>
              <Typography
                sx={{
                  color: "#6ECFA0",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  mb: 2,
                  fontStyle: "italic",
                }}
              >
                {t.footer.tagline}
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.50)", fontSize: "0.85rem", lineHeight: 1.7, maxWidth: 320 }}>
                {t.footer.description}
              </Typography>
            </Grid>

            {/* Navigation */}
            <Grid size={{ xs: 6, md: 2 }}>
              <Typography
                fontWeight={700}
                sx={{ mb: 2.5, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}
              >
                {t.footer.nav_title}
              </Typography>
              <Stack spacing={1.5}>
                {[
                  { label: t.footer.links[0], href: "#story" },
                  { label: t.footer.links[1], href: "#technology" },
                  { label: t.footer.links[2], href: "#benefits" },
                  { label: t.footer.links[3], href: "#contact" },
                ].map((link) => (
                  <Button
                    key={link.href}
                    href={link.href}
                    sx={{
                      color: "rgba(255,255,255,0.60)",
                      justifyContent: "flex-start",
                      p: 0,
                      minWidth: 0,
                      fontSize: "0.88rem",
                      fontWeight: 500,
                      "&:hover": { color: "#6ECFA0", bgcolor: "transparent" },
                    }}
                  >
                    {link.label}
                  </Button>
                ))}
              </Stack>
            </Grid>

            {/* Contact */}
            <Grid size={{ xs: 6, md: 3 }}>
              <Typography
                fontWeight={700}
                sx={{ mb: 2.5, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}
              >
                {t.footer.contact_title}
              </Typography>
              <Stack spacing={2}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <MailOutline sx={{ fontSize: 16, color: "#6ECFA0" }} />
                  <Typography sx={{ color: "rgba(255,255,255,0.60)", fontSize: "0.85rem" }}>
                    hello@gaianexus.com
                  </Typography>
                </Stack>
                <Typography sx={{ color: "rgba(255,255,255,0.40)", fontSize: "0.82rem", lineHeight: 1.6 }}>
                  {t.footer.collaboration}
                </Typography>
              </Stack>
            </Grid>

            {/* CTA panel */}
            <Grid size={{ xs: 12, md: 3 }}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: "16px",
                  bgcolor: "rgba(30,91,67,0.35)",
                  border: "1px solid rgba(110,207,160,0.15)",
                }}
              >
                <Typography fontWeight={700} sx={{ mb: 1, fontSize: "0.95rem" }}>
                  Ready to transform your farm?
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.55)", fontSize: "0.82rem", mb: 2.5, lineHeight: 1.6 }}>
                  Request our product brochure and speak with our team.
                </Typography>
                <Button
                  href="#contact"
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{
                    color: "#6ECFA0",
                    borderColor: "rgba(110,207,160,0.35)",
                    fontWeight: 700,
                    "&:hover": { bgcolor: "rgba(110,207,160,0.10)", borderColor: "#6ECFA0" },
                  }}
                >
                  {t.contact.brochureLabel}
                </Button>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", mb: 4 }} />
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            spacing={2}
          >
            <Typography sx={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem" }}>
              © {new Date().getFullYear()} {t.footer.copyright}
            </Typography>
            <Stack direction="row" spacing={0.5}>
              {locales.map((loc) => (
                <Button
                  key={loc}
                  size="small"
                  onClick={() => setLocale(loc)}
                  sx={{
                    color: locale === loc ? "#6ECFA0" : "rgba(255,255,255,0.35)",
                    fontWeight: locale === loc ? 700 : 400,
                    minWidth: 0,
                    px: 1,
                    fontSize: "0.78rem",
                    "&:hover": { color: "#6ECFA0", bgcolor: "transparent" },
                  }}
                >
                  {localeLabels[loc]}
                </Button>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

/* ── Reusable components ── */

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      variant="overline"
      sx={{
        color: "primary.main",
        fontWeight: 800,
        letterSpacing: "0.16em",
        display: "block",
        fontSize: "0.72rem",
      }}
    >
      {children}
    </Typography>
  );
}
