import { NextRequest, NextResponse } from "next/server";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "luna365admin";

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();

    if (!password || password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Generate a simple session token (timestamp + hash)
    const token = btoa(
      JSON.stringify({
        authenticated: true,
        timestamp: Date.now(),
        expires: Date.now() + 24 * 60 * 60 * 1000, // 24h
      })
    );

    return NextResponse.json({ success: true, token });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}

// Verify token validity
export async function GET(req: NextRequest) {
  const token = req.headers.get("x-admin-token");

  if (!token) {
    return NextResponse.json({ valid: false }, { status: 401 });
  }

  try {
    const decoded = JSON.parse(atob(token));
    if (decoded.authenticated && decoded.expires > Date.now()) {
      return NextResponse.json({ valid: true });
    }
    return NextResponse.json({ valid: false }, { status: 401 });
  } catch {
    return NextResponse.json({ valid: false }, { status: 401 });
  }
}
