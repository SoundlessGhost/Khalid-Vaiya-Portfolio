"use client";

import React, { useMemo, useState } from "react";

import { ROWS } from "@/lib/amazon-data";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeftRight, Filter, ListFilter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ALL_COLUMNS = [
  { key: "title", label: "Title" },
  { key: "address", label: "Address" },
  { key: "website", label: "Website" },
  { key: "phone", label: "Phone" },
  { key: "latitude", label: "Latitude" },
  { key: "longitude", label: "Longitude" },
  { key: "rating", label: "Rating" },
  { key: "reviews", label: "Reviews" },
  { key: "type", label: "Type" },
  { key: "thumbnail", label: "Thumbnail" },
];

// attach a couple statuses so it looks like screenshot 3
const dataWithStatus = ROWS.map((r, i) => ({
  ...r,
  status: ["Success", "Failed", "Processing"][i % 3],
}));

export default function PricingLanding() {
  // left hero copy (like screenshot #1)
  const bullets = [
    {
      title: "Accurate competitor pricing insights:",
      body: "Learn how to access reliable market data you can trust to make smarter, more informed decisions.",
    },
    {
      title: "Protect your bottom line:",
      body: "Avoid costly mistakes by implementing a clear and effective price data collection plan that works.",
    },
  ];

  // table state
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const pageSize = 8;

  const [visibleCols, setVisibleCols] = useState([
    "title",
    "address",
    "website",
    "phone",
    "latitude",
    "longitude",
    "rating",
    "reviews",
    "type",
    "thumbnail",
  ]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const base = dataWithStatus;
    if (!q) return base;
    return base.filter((r) =>
      [
        r.title,
        r.address,
        r.website,
        r.phone,
        String(r.rating),
        String(r.reviews),
        r.type,
      ]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  const pageData = filtered.slice(page * pageSize, page * pageSize + pageSize);

  const toggleCol = (key) => {
    setVisibleCols((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  return (
    <div className="h-auto bg-white dark:bg-slate-950 my-20">
      {/* max width container */}
      <div className="mx-auto w-full max-w-9xl px-6 md:px-8 ">
        {/* Hero two-column layout */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* LEFT: copy */}
          <div>
            {/* <Badge variant="secondary" className="mb-4">
              Free Ebook
            </Badge> */}
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              5 Key Factors to
              <br />
              Successful Competitor
              <br />
              Price Data Collection
            </h1>
            <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-xl">
              Discover the tools and strategies that will take your pricing
              expertise to the next level.
            </p>

            <ul className="space-y-6">
              {bullets.map((b) => (
                <li key={b.title}>
                  <p className="font-semibold mb-1">{b.title}</p>
                  <p className="text-slate-600 dark:text-slate-300">{b.body}</p>
                </li>
              ))}
            </ul>

            {/* <Button size="lg" className="rounded-2xl">
              Read Free Ebook
            </Button> */}
          </div>

          {/* RIGHT: replaces video with a scrollable, wide table */}
          <Card className="shadow-xl rounded-2xl">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                <span>Amazon Data sheet File</span>
                <ArrowLeftRight className="h-5 w-5 opacity-70" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Controls */}
              <div className="mb-4 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <Input
                    placeholder="Filter by Title…"
                    value={query}
                    onChange={(e) => {
                      setPage(0);
                      setQuery(e.target.value);
                    }}
                    className="w-[240px]"
                  />
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="gap-2">
                      <ListFilter className="h-4 w-4" /> Columns
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {ALL_COLUMNS.map((c) => (
                      <DropdownMenuCheckboxItem
                        key={c.key}
                        checked={visibleCols.includes(c.key)}
                        onCheckedChange={() => toggleCol(c.key)}
                      >
                        {c.label}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Scroll container — horizontal */}
              <div className="overflow-x-auto rounded-xl border">
                <Table className="min-w-[1200px]">
                  <TableHeader>
                    <TableRow className="bg-slate-50 dark:bg-slate-900/40">
                      {/* selection checkbox column */}
                      {visibleCols.includes("title") && (
                        <TableHead>Title</TableHead>
                      )}
                      {visibleCols.includes("address") && (
                        <TableHead>Address</TableHead>
                      )}
                      {visibleCols.includes("website") && (
                        <TableHead>Website</TableHead>
                      )}
                      {visibleCols.includes("phone") && (
                        <TableHead>Phone</TableHead>
                      )}
                      {visibleCols.includes("latitude") && (
                        <TableHead>Latitude</TableHead>
                      )}
                      {visibleCols.includes("longitude") && (
                        <TableHead>Longitude</TableHead>
                      )}
                      {visibleCols.includes("rating") && (
                        <TableHead>Rating</TableHead>
                      )}
                      {visibleCols.includes("reviews") && (
                        <TableHead>Reviews</TableHead>
                      )}
                      {visibleCols.includes("type") && (
                        <TableHead>Type</TableHead>
                      )}
                      {visibleCols.includes("thumbnail") && (
                        <TableHead>Thumbnail</TableHead>
                      )}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pageData.map((r, idx) => (
                      <TableRow key={idx} className="hover:bg-slate-50/60">
                        {/* selection */}
                        {visibleCols.includes("title") && (
                          <TableCell>{r.title}</TableCell>
                        )}
                        {visibleCols.includes("address") && (
                          <TableCell className="whitespace-nowrap">
                            {r.address}
                          </TableCell>
                        )}
                        {visibleCols.includes("website") && (
                          <TableCell>
                            <a
                              className="text-emerald-600 hover:underline"
                              href={r.website}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {r.website.replace(/^https?:\/\//, "")}
                            </a>
                          </TableCell>
                        )}
                        {visibleCols.includes("phone") && (
                          <TableCell>{r.phone}</TableCell>
                        )}
                        {visibleCols.includes("latitude") && (
                          <TableCell>{r.latitude}</TableCell>
                        )}
                        {visibleCols.includes("longitude") && (
                          <TableCell>{r.longitude}</TableCell>
                        )}
                        {visibleCols.includes("rating") && (
                          <TableCell>{r.rating}</TableCell>
                        )}
                        {visibleCols.includes("reviews") && (
                          <TableCell>{r.reviews}</TableCell>
                        )}
                        {visibleCols.includes("type") && (
                          <TableCell>{r.type}</TableCell>
                        )}
                        {visibleCols.includes("thumbnail") && (
                          <TableCell>
                            <a
                              className="truncate block max-w-[180px] text-emerald-600 hover:underline"
                              href={r.thumbnail}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {r.thumbnail}
                            </a>
                          </TableCell>
                        )}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
