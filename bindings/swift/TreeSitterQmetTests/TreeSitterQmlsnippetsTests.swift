import XCTest
import SwiftTreeSitter
import TreeSitterQmet

final class TreeSitterQmetTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_qmet())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Qmet grammar")
    }
}
