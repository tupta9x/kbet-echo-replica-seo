
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Fetch games from the Gamezop API
    const response = await fetch('https://pub.gamezop.com/v3/games?id=10431');
    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching games:', error);
    return NextResponse.json(
      { error: 'Failed to fetch games' }, 
      { status: 500 }
    );
  }
}
