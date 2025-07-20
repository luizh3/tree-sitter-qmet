package tree_sitter_qmet_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_qmet "github.com/tree-sitter/tree-sitter-qmet/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_qmet.Language())
	if language == nil {
		t.Errorf("Error loading Qmet grammar")
	}
}
